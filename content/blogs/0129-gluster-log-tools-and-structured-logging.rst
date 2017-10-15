Gluster Log Tools and Structured Logging
########################################

:slug: gluster-log-tools-and-structured-logging
:author: Aravinda VK
:date: 2017-10-15
:tags: gluster, glusterfsblog
:summary: Framework to add structured logging support is already available in
          Gluster. We have to convert the existing log messages to this new format.

All Gluster components follow the same format for logging, as shown below

.. figure:: /images/gluster-logs-format.png
   :alt: Gluster Log Format

   Gluster Log Format

But as you have observed already, we don't follow any format for the
actual message. No generic parser can extract metrics/details from the
log files since the format differs for each message.

Install Gluster Log tools
-------------------------

Clone and install ``gluster-log`` tools using,

.. code-block:: bash

    git clone https://github.com/aravindavk/glusterlog.git
    cd glusterlog
    make install

Adding Colors to Gluster log files
----------------------------------

Add colors to Gluster logs using ``gluster-log colorize``,

.. code-block:: bash

    tail -1000 /var/log/glusterfs/glusterd.log | gluster-log colorize
    grep " E " /var/log/glusterfs/glusterd.log | gluster-log colorize
    cat /var/log/glusterfs/glusterd.log | gluster-log colorize > /tmp/glusterd_color.log
    less -R /tmp/glusterd_color.log

.. figure:: /images/gluster-log-parsed.png
   :alt: Gluster Log parsed

   Colorized Gluster log

If logs are in structured logging is format,

.. figure:: /images/gluster-log-parsed-structured-logging.png
   :alt: Gluster Log parsed

   Colorized Gluster log. Note: this tool also highlighted key values.
   
Gluster logs in JSON format
---------------------------

To convert the Gluster logs to ``json`` format for further processing,

.. code-block:: bash

    tail -1 /var/log/glusterfs/glusterd.log | gluster-log json

Example output,

.. code-block:: json

    [
    {
        "known_format": true,
        "ts": "2017-10-10 09:26:08.243591",
        "log_level": "E",
        "msg_id": "",
        "file_info": "rpcsvc.c:1609:rpcsvc_program_unregister",
        "domain": "0-rpc-service",
        "message": "Program unregistration failed: Gluster MGMT Handshake, Num: 1239873, Ver: 1, Port: 0",
        "fields": {
        }
    }
    ]
    
Structured Logging
------------------
Framework to add structured logging support is already available in
Gluster(`Patch <https://review.gluster.org/#/c/17551/>`__ and
`details <https://github.com/gluster/glusterfs/issues/240>`__). We have
to convert the existing log messages to this new format.

For example, below log message contains two variables, Client and version,
but the generic parser can't split this message into key values. We will end up
having custom parser for each message.

.. code-block:: text

    [2017-10-10 09:07:22.662717] I [MSGID: 115029] [server-handshake.c:800:server_setvolume] 0-gv1-server: \
        accepted client from f26-16826-2017/10/10-09:07:22:630133-gv1-client-0-0-0 (version: 4.0dev)

Converted JSON,

.. code-block:: bash

    $grep "MSGID: 115029" /var/log/glusterfs/bricks/bricks-b1.log | gluster-log json

.. code-block:: json

    [
    {
        "known_format": true,
        "ts": "2017-10-10 09:07:22.662717",
        "log_level": "I",
        "msg_id": "115029",
        "file_info": "server-handshake.c:800:server_setvolume",
        "domain": "0-gv1-server",
        "message": "accepted client from f26-16826-2017/10/10-09:07:22:630133-gv1-client-0-0-0 (version: 4.0dev)",
        "fields": {
        }
    }
    ]

If we change the format as below then it can be parsed easily.

.. code-block:: text

    <MESSAGE><TAB><KEY1>=<VALUE1><TAB><KEY2>=<VALUE2>...

    [2017-10-10 09:07:22.662717] I [MSGID: 115029] [server-handshake.c:800:server_setvolume] 0-gv1-server: \
        accepted client   from=f26-16826-2017/10/10-09:07:22:630133-gv1-client-0-0-0    version=4.0dev

Converted JSON,

.. code-block:: bash

    $grep "MSGID: 115029" /var/log/glusterfs/bricks/bricks-b1.log | gluster-log json

.. code-block:: json

    [
    {
        "known_format": true,
        "ts": "2017-10-10 09:07:22.662717",
        "log_level": "I",
        "msg_id": "115029",
        "file_info": "server-handshake.c:800:server_setvolume",
        "domain": "0-gv1-server",
        "message": "accepted client",
        "fields": {
            "from": "f26-16826-2017/10/10-09:07:22:630133-gv1-client-0-0-0",
            "version": "4.0dev"
        }
    }
    ]

Patch to change the existing log message to new format,

.. code-block:: diff

    diff --git a/xlators/protocol/server/src/server-handshake.c
    b/xlators/protocol/server/src/server-handshake.c
    index f2ab93fe5..09659754e 100644
    --- a/xlators/protocol/server/src/server-handshake.c
    +++ b/xlators/protocol/server/src/server-handshake.c
    @@ -794,10 +794,11 @@ server_setvolume (rpcsvc_request_t *req)
                     /* Store options received from client side */
                     req->trans->clnt_options = dict_ref(params);
     
    -                gf_msg (this->name, GF_LOG_INFO, 0, PS_MSG_CLIENT_ACCEPTED,
    -                        "accepted client from %s (version: %s)",
    -                        client->client_uid,
    -                        (clnt_version) ? clnt_version : "old");
    +                gf_smsg (this->name, GF_LOG_INFO, 0, PS_MSG_CLIENT_ACCEPTED,
    +                         "accepted client",
    +                         "from=%s", client->client_uid,
    +                         "version=%s", (clnt_version) ? clnt_version : "old",
    +                         NULL);
     
                     gf_event (EVENT_CLIENT_CONNECT, "client_uid=%s;"
                               "client_identifier=%s;server_identifier=%s;"

Status of Structured logging in Gluster
---------------------------------------

- With 3.12 release, all Gluster Geo-replication logs are converted to
  this new format(`Patch <https://review.gluster.org/17551>`__)
- Gluster Logging framework now supports this new format using
  ``gf_slog`` and ``gf_smsg``
- `Patch <https://review.gluster.org/18497>`__ sent to convert log
  messages of Gluster ``changelog`` component.

Let me know your thoughts.
