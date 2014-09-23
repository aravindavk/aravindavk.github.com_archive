Effective GlusterFs monitoring using hooks
##########################################

:slug: effective-glusterfs-monitoring-using-hooks
:author: Aravinda VK
:date: 2013-11-28
:tags: glusterfs,glusterfsblog
:summary: Let us imagine we have a GlusterFs monitoring system which displays list of volumes and its state, to show the realtime status, monitoring app need to query the GlusterFs in regular interval to check volume status, new volumes etc. Assume if the polling interval is 5 seconds then monitoring app has to run "gluster volume info command" ~17000 times a day!

Let us imagine we have a GlusterFs monitoring system which displays list of volumes and its state, to show the realtime status, monitoring app need to query the GlusterFs in regular interval to check volume status, new volumes etc. Assume if the polling interval is 5 seconds then monitoring app has to run :code:`gluster volume info` command ~17000 times a day!

How about maintaining a state file in each node? which gets updated after every new GlusterFs event(create, delete, start, stop etc).

In this blog post I am trying to explain the possibility of creating state file and using it.

As of today GlusterFs provides following hooks, which we can use to update our state file.

.. code-block:: text

    create
    delete
    start
    stop
    add-brick
    remove-brick
    set


How to use hooks
================

GlusterFs hooks present in :code:`/var/lib/glusterd/hooks/1` directory. Following example shows sending message to all users using :code:`wall` command when any new GlusterFs volume is created.

Create a shell script :code:`/var/lib/glusterd/hooks/1/create/post/SNotify.bash` and make it executable. Whenever a volume is created GlusterFs executes all the executable scripts present in respective hook directory(Glusterfs executes only the scripts which filename starting with 'S')

.. code-block:: bash

    #!/bin/bash
    VOL=
    ARGS=$(getopt -l "volname:"  -name "" $@)
    eval set -- "$ARGS"
    while true; do
        case $1 in
            --volname)
                shift
                VOL=$1
                ;;
            *)
                shift
                break
                ;;
        esac
        shift
    done
    
    wall "Gluster Volume Created: $VOL";



Experimental project - GlusterWeb
=================================

This experimental project maintains a sqlite database :code:`/var/lib/glusterd/nodestate/glusternodestate.db` which gets updated after any GlusterFs event. For example if a GlusterFs volume is created then it updates volumes table and also bricks table.

This project depends on `glusterfs-tools <https://github.com/aravindavk/glusterfs-tools>`__ so install both projects.

.. code-block:: bash

    git clone https://github.com/aravindavk/glusterfs-tools.git
    cd glusterfs-tools
    sudo python setup.py install
    
    git clone https://github.com/aravindavk/glusterfs-web.git
    cd glusterfs-web
    sudo python setup.py install


By running `setup`, this tool will install all the hooks which are required for monitoring. (`cleanup` is for removing all the hooks)

.. code-block:: bash

    sudo glusternodestate setup


All set! now run :code:`glusterweb` to start webapp.

.. code-block:: bash

    sudo glusterweb


Web application starts running in :code:`http://localhost:8080` you can change the port using :code:`--port` or :code:`-p` option. 

.. code-block:: bash

    sudo glusterweb -p 9000



.. figure:: /images/glusterweb-v0.1.png
   :alt: GlusterWeb
   
   Initial version of web interface.


Future plans
============

**Authentication**: Option to provide username and password or access key while running glusterweb, For example

.. code-block:: bash

    sudo glusterweb --username aravindavk --password somesecret
    # or
    sudo glusterweb --key secretonlyiknow


**More gluster hooks support:** we need more GlusterFs hooks for better monitoring(refer Problems below)

**More GlusterFs features support:** As a experiment UI only lists volumes, we need improved UI and support for different gluster features.

**Actions support:** Support for volume creation, adding/removing bricks etc.

**REST api and SDK:** Providing REST api for gluster operations.

**Many more:** Not yet planned :)


Problems
========

**State file consistency:** If glusterd goes down in the node then the database will have wrong details about node's state. One workaround is to reset the database if glusterd is down using a cron job, when glusterd comes up, database will not gets updated and the database will have previous updated details. To prevent this we need a glusterfs hook for `glusterd-start`.

**More hooks:** As of today we don't have hooks for volume down/up, brick down/up and other events. We need following hooks for effective monitoring glusterfs.(Add more if anything missing in the list)

.. code-block:: text

    glusterd-start
    peer probe
    peer detach
    volume-down
    volume-up
    brick-up
    brick-down


Let me know your thoughts! Thanks.
