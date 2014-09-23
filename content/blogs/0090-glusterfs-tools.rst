GlusterFS Tools
###############

:slug: glusterfs-tools
:author: Aravinda VK
:date: 2013-06-18
:tags: glusterfs,tools,glusterfsblog
:summary: A wrapper around GlusterFS CLI tool

.. raw:: html

    <div class="notice-update">
    UPDATE: <br/>Installation and usage is simplified with the new release of glusterfs-tools, refer <a href="http://aravindavk.in/blog/glusterdf-df-for-gluster-volumes/">this blog</a> for more details.
    </div>

From `GlusterFS website <http://gluster.org>`__

    GlusterFS is an open source, distributed file system capable of scaling to several petabytes (actually, 72 brontobytes!) and handling thousands of clients. GlusterFS clusters together storage building blocks over Infiniband RDMA or TCP/IP interconnect, aggregating disk and memory resources and managing data in a single global namespace. GlusterFS is based on a stackable user space design and can deliver exceptional performance for diverse workloads.

Gluster CLI has limited features to view and filter the volume info. I started a small project to enhance Gluster CLI for personal use. As of now it consists of a tool to list Gluster volumes in tabular format. Other intersesting features includes filtering the output based on name, type, status, bricks etc. 

Clone the project(I cloned it to :code:`/home/aravinda/sandbox/`)

.. code-block:: bash

    cd /home/aravinda/sandbox
    git clone https://github.com/aravindavk/glusterfs-tools.git


Create a shellscript to call gftools /usr/local/bin/gfvolumes

.. code-block:: bash

    #!/bin/bash
    python /home/aravinda/sandbox/glusterfs-tools/gftools/volumes.py "$@"


Make gfvolumes executable

.. code-block:: bash

    chmod +x /usr/local/bin/gfvolumes


Now we can run :code:`sudo gfvolumes` to see the list of glusterfs volumes. Type :code:`gfvolumes --help` for help.


.. figure:: /images/glusterfs/all_volumes.png
   :alt: All Volumes

   All Volumes



.. figure:: /images/glusterfs/name_filter.png
   :alt: Name Filter

   Name Filter


.. figure:: /images/glusterfs/status_filter.png
   :alt: Status Filter

   Status Filter

.. figure:: /images/glusterfs/type_filter.png
   :alt: Type Filter

   Type Filter

.. figure:: /images/glusterfs/show_bricks.png
   :alt: Name Filter

   Show Bricks


Additionally it can output filtered details in JSON format. 


.. figure:: /images/glusterfs/json_format.png
   :alt: Name Filter

   JSON Format


We can easily import this in our python script. 

.. code-block:: python

    #!/usr/bin/python
    from gftools import volumes
    gfvols = volumes.GfVolumes()    
    ok, vols = gfvols.get(name='^gv[0-9]$', status='down') # Various filters available
    if ok:
        # Do action


**Note:** root permission is required to run gluster command, so run gfvolumes as root(:code:`sudo gfvolumes`)

Future plans:
=============

1. Adding more filters
2. Adding more admin tools
3. Creating RPM/DEB packages


C & S Welcome.
