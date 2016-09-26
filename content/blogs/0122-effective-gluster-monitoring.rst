Effective Gluster Monitoring using Events APIs
##############################################

:slug: effective-gluster-monitoring-eventsapis
:author: Aravinda VK
:date: 2016-09-26
:tags: gluster, glusterfsblog
:summary: Without Events APIs, one way to get status of Cluster is by
          calling Gluster status command/api in periodic intervals.

Last week I got opportunity to present about Gluster Events APIs in
`Gluster meetup Bangalore <http://www.meetup.com/glusterfs-India/events/233515975>`__.

Events APIs will be available with ``Gluster 3.9`` release.(`Release
Candidate
<http://www.gluster.org/pipermail/maintainers/2016-September/001442.html>`__
is available if anybody interested in testing)

Without Events APIs, one way to get status of Cluster is by
calling Gluster status command/api in periodic intervals.

Below illustration shows calling ``status`` once every 10 seconds.

.. image:: /images/gluster_monitor_without_events.jpg
   :alt: Get Cluster status without Events APIs

With Events APIs, setup a listener Webhook and register with Gluster
using ``gluster-eventsapi webhook-add <URL>``. Call Gluster status
command whenever webhook receives an Event.(Check `this
<http://aravindavk.in/blog/10-mins-intro-to-gluster-eventing/>`__ blog
to know Webhooks and Events APIs in detail)

.. image:: /images/gluster_monitor_with_events.jpg
   :alt: Get Cluster status with Events APIs

As part of presentation, created some visualizations to show how these
real time notifications can be used to refresh the UI automatically
when Gluster cluster state changes.

Following gif shows the UI change immediately after creating a Gluster
Volume.

.. image:: /images/create_start_volume.gif
   :alt: Gluster Volume Create and Start

When a brick process is killed,

.. image:: /images/brick_down.gif
   :alt: Brick Process Killed

Volume Stop,

.. image:: /images/volume_stop.gif
   :alt: Volume Stop


References:
-----------
- Documentation for the Events APIs feature is available
  `here <http://gluster.readthedocs.io/en/latest/Administrator%20Guide/Events%20APIs/>`__.
- Gif images created using ``byzanz`` tool.(Example: ``sleep 2;
  byzanz-record --duration=5 --x=500 --y=0 --width=1024 --height=800
  volume_stop.gif``
- Illustrations are created using `mypaint <http://mypaint.org/>`__ software and Wacom Tablet.
- Dashboard prototype was created using `Python
  <http://python.org/>`__ `Flask <http://flask.pocoo.org/>`__ + `Elm
  <http://elm-lang.org/>`__ + Websockets
