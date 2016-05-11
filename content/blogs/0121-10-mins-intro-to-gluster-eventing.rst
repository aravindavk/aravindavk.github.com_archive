10 minutes introduction to Gluster Eventing Feature
#####################################################

:slug: 10-mins-intro-to-gluster-eventing
:author: Aravinda VK
:date: 2016-05-11
:tags: gluster, glusterfsblog
:summary: It provides close to realtime notification and alerts for
          the Gluster cluster state changes.

.. raw:: html

    <div class="notice-update">
    Demo video is included in the end, or you can directly watch it on <a href="https://www.youtube.com/watch?v=urzong5sKqc">Youtube</a>
    </div>

Gluster Eventing is the new feature as part of Gluster.Next
initiatives, it provides close to realtime notification and alerts for
the Gluster cluster state changes.

Websockets APIs to consume events will be added later. Now we emit
events via another popular mechanism called "Webhooks".(Many popular
products provide notifications via Webhooks `Github,
<https://developer.github.com/webhooks/>`__ `Atlassian,
<https://developer.atlassian.com/jiradev/jira-apis/webhooks>`__
`Dropbox, <https://www.dropbox.com/developers/reference/webhooks>`__ and many more)

**Webhooks** are similar to callbacks(over HTTP), on event Gluster will
call the Webhook URL(via POST) which is configured. Webhook is a web server
which listens on a URL, this can be deployed outside of the
Cluster. Gluster nodes should be able to access this Webhook server on
the configured port. We will discuss about adding/testing webhook
later.

Example Webhook written in python,

.. code-block:: python

    from flask import Flask, request

    app = Flask(__name__)

    @app.route("/listen", methods=["POST"])
    def events_listener():
        gluster_event = request.json
        if gluster_event is None:
            # No event to process, may be test call
            return "OK"

        # Process gluster_event
        # {
        #  "nodeid": NODEID,
        #  "ts": EVENT_TIMESTAMP,
        #  "event": EVENT_TYPE,
        #  "message": EVENT_DATA
        # }
        return "OK"

    app.run(host="0.0.0.0", port=9000)

Eventing feature is not yet available in any of the releases, patch is
under review in upstream master(http://review.gluster.org/14248). If anybody interested in trying it
out can cherrypick the patch from review.gluster.org

.. code-block:: bash

    git clone http://review.gluster.org/glusterfs
    cd glusterfs
    git fetch http://review.gluster.org/glusterfs refs/changes/48/14248/5
    git checkout FETCH_HEAD
    git checkout -b <YOUR_BRANCH_NAME>
    ./autogen.sh
    ./configure
    make
    make install

Start the Eventing using,

.. code-block:: bash

    gluster-eventing start

Other commands available are stop, restart, reload and
status. ``gluster-eventing --help`` for more details.

Now Gluster can send out notifications via Webhooks. Setup a web
server listening to a POST request and register that URL to Gluster
Eventing. Thats all.

.. code-block:: bash

    gluster-eventing webhook-add <MY_WEB_SERVER_URL>

For example, if my webserver is running at ``http://192.168.122.188:9000/listen``
then register using,

.. code-block:: bash

    gluster-eventing webhook-add ``http://192.168.122.188:9000/listen``

We can also test if web server is accessible from all Gluster nodes
using ``webhook-test`` subcommand.

.. code-block:: bash

    gluster-eventing webhook-test http://192.168.122.188:9000/listen

With the initial patch only basic events are covered, I will add more
events once this patch gets merged. Following events are available
now.

.. code-block:: text

    Volume Create
    Volume Delete
    Volume Start
    Volume Stop
    Peer Attach
    Peer Detach

Created a small demo to show this eventing feature, it uses Web server
which is included with the patch for Testing.(laptop hostname is ``sonne``)

.. code-block:: bash

    /usr/share/glusterfs/scripts/eventsdash.py --port 8080

Login to Gluster node and start the eventing,

.. code-block:: bash

    gluster-eventing start
    gluster-eventing webhook-add http://sonne:8080/listen

And then login to VM and run Gluster commands to probe/detach peer,
volume create, start etc and Observe the realtime notifications for
the same where eventsdash is running.

Example,

.. code-block:: bash

    ssh root@fvm1
    gluster peer attach fvm2
    gluster volume create gv1 fvm1:/bricks/b1 fvm2:/bricks/b2 force
    gluster volume start gv1
    gluster volume stop gv1
    gluster volume delete gv1
    gluster peer detach fvm2

Demo also includes a Web UI which refreshes its UI automatically when
something changes in Cluster.(I am still fine tuning this UI, not yet
available with the patch. But soon will be available as seperate repo
in my github)

.. raw:: html

         <iframe width="640" height="360" src="https://www.youtube.com/embed/urzong5sKqc" frameborder="0" allowfullscreen></iframe>

FAQ:
----
- **Will this feature available in 3.8 release?**

  Sadly No. I couldn't get this merged before 3.8 feature freeze :(

- **Is it possible to create a simple Gluster dashboard outside the
  cluster?**

  It is possible, along with the events we also need REST APIs to get
  more information from cluster or to perform any action in cluster.
  (WIP REST APIs are available `here <https://github.com/aravindavk/glusterfs-restapi>`__)

- **Is it possible to filter only alerts or critical notifications?**

  Thanks `Kotresh <http://hrkscribbles.blogspot.in/>`__ for the
  suggestion. Yes it is possible to add event_type and event_group
  information to the dict so that it can be filtered easily.(Not yet
  available now, but will add this feature once this patch gets merged
  in Master)

- **Is documentation available to know more about eventing design and
  internals?**

  Design spec available `here <http://review.gluster.org/13115>`__
  (which discusses about Websockets, currently we don't have
  Websockets support). Usage documentation is available in the commit
  message of the patch(http://review.gluster.org/14248).


Comments and Suggestions Welcome.
