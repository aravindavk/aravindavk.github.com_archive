glusterdf - df for gluster volumes
##################################

:slug: glusterdf-df-for-gluster-volumes
:author: Aravinda VK
:date: 2013-09-24
:tags: glusterfs,tools,glusterfsblog
:summary: A CLI utility to check the disk usage of glusterfs volumes

A CLI utility to check the disk usage of `glusterfs <http://gluster.org/>`__ volumes. Using :code:`df` command we can view the disk usage of only mounted glusterfs volumes. This utility takes care of mounting gluster volumes available in the machine where this command is executed. glusterdf uses `libgfapi <https://github.com/gluster/glusterfs/tree/master/api>`__ provided by glusterfs to fetch the statvfs information.

Installation is very simple,

.. code-block:: bash

    git clone https://github.com/aravindavk/glusterfs-tools.git
    cd glusterfs-tools
    sudo python setup.py install


You can also clone this project from `forge.gluster.org/glusterfs-tools <https://forge.gluster.org/glusterfs-tools>`__

Once installed, two tools will be available :code:`glustervolumes` and `glusterdf`.

:code:`sudo glusterdf --help` to know more about options available. (same for glustervolumes `sudo glustervolumes --help`)

Usage examples:

.. figure:: /images/glusterfs/glusterdf_h.png
   :alt: glusterdf -h

   sudo glusterdf -h (Disk usage in human readable format)


.. figure:: /images/glusterfs/glusterdf_i.png
   :alt: glusterdf -i

   sudo glusterdf -i (View inodes usage information)


.. figure:: /images/glusterfs/glusterdf_status_type_h.png
   :alt: sudo glusterdf --status up --type repl -h

   sudo glusterdf --status up --type repl -h (View all running replicated volumes)


.. figure:: /images/glusterfs/glusterdf_volumewithbrick.png
   :alt: sudo glusterdf -h --volumewithbrick "/b[12]"

   sudo glusterdf -h --volumewithbrick "/b[12]"


.. figure:: /images/glusterfs/glusterdf_json.png
   :alt: sudo glusterdf --status up --type repli -h --json | python -m json.tool

   sudo glusterdf --status up --type repli -h --json | python -m json.tool


.. figure:: /images/glusterfs/glusterdf-help.png
   :alt: glusterdf --help

   sudo glusterdf --help


In my previous blog(`this <http://aravindavk.in/blog/glusterfs-tools/>`__) I wrote about gfvolumes(now it is `glustervolumes`). glusterfs-tools is rewritten as python library which can be used with your Python programs.

For example 

.. code-block:: python

    from glusterfstools import volumes, gfapi
    # Get all volumes
    vols = volumes.get()
    # Get a specific volume information
    vol = volumes.get(name="gv1")
    # Search volumes by status
    down_volumes = volumes.search({"status": "down"})
    # Search volumes by type
    distribute_volumes = volumes.search({"type": "distribute"})
    # Statvfs information
    vol_statvfs = gfapi.statvfs("gv1")
    # To view information about gluster volumes which are down
    # and having bricks like "/gfs"
    vols = volumes.search({"status": "down", "volumewithbricks": "/gfs"})
    # To view filters available
    print (volumes.filters())
    


volumes.search accepts filters as parameter, extending volume filters is very simple. For example name filter looks like this(`src/glusterfstools/volumefilters.py <https://github.com/aravindavk/glusterfs-tools/blob/master/src/glusterfstools/volumefilters.py>`__)

.. code-block:: python

    @filter("name")
    def name_filter(vols, value):
        def is_match(vol, value):
            if value in ['', 'all'] or \
                vol["name"].lower() == value.lower().strip() or \
                re.search(value, vol["name"]):
                return True
            else:
                return False
    
        return [v for v in vols if is_match(v, value)]


The filter can be used as below

.. code-block:: python

    from glusterfstools import volumes
    
    # Filters the volumes with name either gv1 or gv2
    filters = {"name": "gv[12]"}
    print volumes.search(filters)
    
