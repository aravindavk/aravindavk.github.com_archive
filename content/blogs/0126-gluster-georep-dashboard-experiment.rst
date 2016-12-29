Gluster Geo-replication Dashboard Experiment
############################################

:slug: gluster-georep-dashboard-experiment
:author: Aravinda VK
:date: 2016-12-29
:tags: gluster, glusterfsblog
:summary: A demo app created to showcase Gluster Events APIs

Gluster Events APIs are available with Gluster 3.9 release. This
project is created as an experiment to showcase the capabilities of
Gluster `Events APIs <http://gluster.readthedocs.io/en/latest/Administrator%20Guide/Events%20APIs/>`__, Dashboard shows realtime
`Geo-replication <http://gluster.readthedocs.io/en/latest/Administrator%20Guide/Geo%20Replication/>`__
status without refreshing the page.

**Note: This is not ready for production use Yet!**

Real-time notifications/UI change only works with Gluster 3.9 or
above, but dashboard can work with older versions of gluster(But
as static display, manual page reload is required to check current status).

Install
-------
Install the app in any one node of Cluster.

.. code-block:: bash

   git clone https://github.com/aravindavk/gluster-georepdash.git
   cd gluster-georepdash/

Install the following Python dependencies using,

.. code-block:: bash

    sudo pip install flask flask_sockets glustercli

Install ``elm`` and ``bower`` using,

.. code-block:: bash

    sudo npm install -g bower elm

Update the ``serverName`` in ``App.elm`` and then generate ``static/app.js``
using,(editing serverName should be automatic, this is code bug! will
fix later)

.. code-block:: bash

   cd gluster-georepdash/
   elm-package install
   elm-make App.elm --output static/app.js

Install ``purecss`` for style using,

.. code-block:: bash

    cd gluster-georepdash/static
    bower install

Usage
-----
Run ``main.py``, to start the app server. Dashboard can be
accessed using `http://nodename:5000`

Test and register this node as Events API subscriber by calling ``webhook-add``
command. Read more about starting Events service `here <http://gluster.readthedocs.io/en/latest/Administrator%20Guide/Events%20APIs/>`__

.. code-block:: bash

    gluster-eventsapi webhook-test http://nodename:5000/listen

If Webhook status is OK from all nodes, then add webhook using,

.. code-block:: bash

    gluster-eventsapi webhook-add http://nodename:5000/listen

Thats all! If everything is okay, dashboard will show realtime
Geo-replication status.

Screenshots
-----------

.. figure:: /images/georep_stop.gif
   :alt: When Geo-replication is stopped

   UI Changes when a Geo-rep session is stopped from anywhere in Cluster

.. figure:: /images/georep_faulty.gif
   :alt: When Geo-replication is stopped

   UI Changes when a Geo-rep session goes to Faulty
   
UI/Dashboard Notes
------------------
- UI is very raw since it is created for demo purpose
- Frontend developed using `Elm <http://elm-lang.org/>`__
- No event available for change in "Last Synced" column, So that
  column value will not match with realtime output from status
  command. Refresh the page to see the latest status.
