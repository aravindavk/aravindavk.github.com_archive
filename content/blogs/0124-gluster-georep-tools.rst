Gluster Geo-replication Tools
#############################

:slug: gluster-georep-tools
:author: Aravinda VK
:date: 2016-11-21
:tags: gluster, glusterfsblog
:summary: A must have tools collection for Gluster Geo-replication users!

A must have tools collection for `Gluster Geo-replication <http://gluster.readthedocs.io/en/latest/Administrator Guide/Geo Replication>`__ users!

Currently this repository contains ``gluster-georep-setup`` and
``gluster-georep-status`` tools. More tools will be added in future. Let
me know if you need any specific tool to manage Gluster
Geo-replication.

``gluster-georep-setup`` was previously called as ``georepsetup`` (Blog
about georepsetup is `here
<http://aravindavk.in/blog/introducing-georepsetup/>`__).

Installation
------------
Install the tools collection using, ``pip install
gluster-georep-tools``. Binary packages are not yet available,
hopefully I will work on the packaging in near future.

gluster-georep-status
---------------------
Wrapper around Geo-rep status command and Volume info command to
provide more features compared to Gluster CLI. This tool combines
Geo-rep status and Volume info to get following advantageous.

- Nodes will be displayed in the same order as in Volume info
- Offline nodes are shown with "Offline" as status
- Status output from different sessions are not mixed.
- Filters are available(Ex: --with-status=active, --with-crawl-status=changelog, --with-status=faulty etc)
- Shows summary of number of workers per status

Example output(Listing all the sessions, ``gluster-georep-status``:

.. code-block:: text

    SESSION: gv1 ==> fvm1::gv2
    +-----------------+--------+-----------------+------------+---------------------+------------+-----------------+-----------------------+
    |      MASTER     | STATUS |   CRAWL STATUS  | SLAVE NODE |     LAST SYNCED     | CHKPT TIME | CHKPT COMPLETED | CHKPT COMPLETION TIME |
    +-----------------+--------+-----------------+------------+---------------------+------------+-----------------+-----------------------+
    | fvm1:/bricks/b1 | Active | Changelog Crawl |    fvm1    | 2016-11-14 08:34:40 |    N/A     |       N/A       |          N/A          |
    | fvm1:/bricks/b2 | Active | Changelog Crawl |    fvm1    | 2016-11-14 08:32:21 |    N/A     |       N/A       |          N/A          |
    +-----------------+--------+-----------------+------------+---------------------+------------+-----------------+-----------------------+
    Active: 2 | Passive: 0 | Faulty: 0 | Created: 0 | Offline: 0 | Stopped: 0 | Initializing: 0 | Total: 2

    SESSION: gv1 ==> geoaccount@fvm1::gv3
    +-----------------+---------+--------------+------------+-------------+------------+-----------------+-----------------------+
    |      MASTER     |  STATUS | CRAWL STATUS | SLAVE NODE | LAST SYNCED | CHKPT TIME | CHKPT COMPLETED | CHKPT COMPLETION TIME |
    +-----------------+---------+--------------+------------+-------------+------------+-----------------+-----------------------+
    | fvm1:/bricks/b1 | Stopped |     N/A      |    N/A     |     N/A     |    N/A     |       N/A       |          N/A          |
    | fvm1:/bricks/b2 | Stopped |     N/A      |    N/A     |     N/A     |    N/A     |       N/A       |          N/A          |
    +-----------------+---------+--------------+------------+-------------+------------+-----------------+-----------------------+
    Active: 0 | Passive: 0 | Faulty: 0 | Created: 0 | Offline: 0 | Stopped: 2 | Initializing: 0 | Total: 2

gluster-georep-setup
---------------------
In previous blog, we discussed about this tool. This tool simplifies
the steps involved in Geo-replication setup. Now setting up
Geo-replication is as easy as running one command. Yay!

.. image:: /images/gluster-georep-setup.png
   :alt: Gluster Geo-rep Setup

Usage instructions of all the tools are available `here
<https://github.com/aravindavk/gluster-georep-tools>`__

Let me know if these tools are useful.
