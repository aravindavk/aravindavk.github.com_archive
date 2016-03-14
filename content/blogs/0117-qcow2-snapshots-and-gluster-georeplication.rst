Qcow2 snapshots and Gluster Geo-replication
###########################################

:slug: qcow2-snapshots-and-gluster-georeplication
:author: Aravinda VK
:date: 2016-03-14
:tags: gluster, glusterfsblog
:summary: Geo-replication is aware of Gluster Sharding feature and taking the advantage of syncing small sharded files instead of big qcow2 image files

Gluster introduced sharding feature to store large files(which can
grow beyond a single brick) or to support running Virtual machines in
Gluster Volumes. Read more about sharding `here
<http://blog.gluster.org/2015/12/introducing-shard-translator/>`__ and
`here <http://blog.gluster.org/2015/12/sharding-what-next-2/>`__.

How to backup VM images?
------------------------
Backing up VM images is not easy, rsync will consume more CPU to
calculate the checksum to sync only incremental changes.

Geo-replication is aware of Gluster Sharding feature and taking the
advantage of syncing small sharded files instead of big qcow2 image
files. But is the data consistent? In this blog we will understand how
to backup VM images to DR site consistently.

Read `here <http://hrkscribbles.blogspot.in/2016/02/gluster-geo-replication-with-sharding.html>`__ to know more about Geo-replication support for sharding.

Setup:
------
VMs hosted in Gluster Volume(Master Volume) and Geo-replicated to
another Gluster Volume(Slave/Backup Volume). Sharding enabled in both
the Gluster Volumes.

Using Internal Qcow2 snapshot:
------------------------------
Before starting Geo-replication every day, take qcow2 snapshot of all
the disks in Master Volume. Geo-rep will sync the data including the
created snapshots.

.. code-block:: bash

    virsh snapshot-create-as --domain <DOMAIN> <SNAP_NAME>

For example,

.. code-block:: bash

    virsh snapshot-create-as --domain fedora22 sn1

But while taking internal snapshot, guest is **paused** :(

.. code-block:: text

    # virsh list
     Id    Name                           State
    ----------------------------------------------------
     3     fedora22                       paused

**Note:** If Guest has more RAM and actively modifying state, then more
time to take Snapshot.

Run Geo-replication using the scheduler script, which will
Set the checkpoint and automatically stops Geo-replication once
checkpoint is reached.(This utility will be available with
`glusterfs-3.7.9` release.)

Run ``/usr/share/glusterfs/scripts/schedule_georep.py --help`` for more
details about the script.(``/usr/local/share/`` in case of source install)

Psudeo code:

.. code-block:: text

    pool_dir=<PATH_OF_MASTER_VOL_MOUNT>                
    images=$(ls ${pool_dir})
    For each images, take qcow2 snapshot
    Run schedule_georep script

Once the scheduler script completes, check the ``qemu-img info`` in Slave
and confirm that Geo-rep synced everything from master Volume
including Snapshots created.

.. code-block:: bash

    qemu-img info /mnt/gv2/f22.qcow2

Example Output:

.. code-block:: text

    image: /mnt/gv2/f22.qcow2
    file format: qcow2
    virtual size: 20G (21474836480 bytes)
    disk size: 2.8G
    cluster_size: 65536
    Snapshot list:
    ID        TAG                 VM SIZE                DATE       VM CLOCK
    2         sn2                    693M 2016-02-23 18:40:10   01:37:34.881
    3         sn3                    693M 2016-02-23 18:47:06   01:44:15.950
    Format specific information:
        compat: 1.1
        lazy refcounts: false
        refcount bits: 16
        corrupt: false

Using External Qcow2 snapshot
-----------------------------
Once we take external snapshot, qcow2 image will become read only base
image and snapshot file will become overlay(Read more about backing
chain and overlay `here <https://kashyapc.fedorapeople.org/virt/lc-2012/snapshots-handout.html>`__).

New changes will be recorded in the overlay instead of base image,
Since base image is frozen Geo-rep will sync the consistent image to
Slave. Start Geo-replication and wait for scheduler script to end.

When multiple external snapshots taken, it is very difficult to
maintain the backing chain and reverting to a snapshot is not easy
when external snapshot is used. Once Geo-rep Scheduler script is
complete, blockcommit the image in Master side to prevent growing
backing chain.

Delete the external snapshot once the blockcommit returns success.

.. code-block:: bash

    pool_dir=<PATH_OF_MASTER_VOL_MOUNT>

    # Take External snapshot
    virsh snapshot-create-as --domain <DOMAIN> <SNAPNAME>  \
        --diskspec vda,file=${pool_dir}/snaps/<SNAPNAME>.qcow2 \
        --disk-only --atomic --no-metadata

    # Run Geo-replication
    /usr/share/glusterfs/scripts/schedule_georep.py \
        <MASTERVOL> <SLAVE> <SLAVEVOL>

    # Blockcommit
    virsh blockcommit <DOMAIN> vda --active --verbose --pivot

    # Remove the external Snapshot file
    rm ${pool_dir}/snaps/<SNAPNAME>.qcow2

With this method, Slave will always have consitent base image.

Ref: http://wiki.libvirt.org/page/Live-disk-backup-with-active-blockcommit

Conclusion
----------
We should use qcow2 external snapshot if Live backup is
required. External snapshot file will be deleted once blockcommit is
done in Master side.
