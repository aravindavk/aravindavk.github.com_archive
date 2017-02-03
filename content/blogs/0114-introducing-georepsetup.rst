Introducing georepsetup - Gluster Geo-replication Setup Tool
#############################################################

:slug: introducing-georepsetup
:author: Aravinda VK
:date: 2015-09-02
:tags: geo-replication, gluster, glusterfsblog
:summary: Now setting up Geo-replication is as easy as running one command. Yay!
:image: /images/georepsetup.png

.. raw:: html

    <div class="notice-update">
    <b>UPDATE:</b> This tool is merged with <em>gluster-georep-tools</em>. Check this <a href="/blog/gluster-georep-tools/">blog</a> for more details.
    </div>

How many of you succeeded to set up Gluster Geo-replication for the first time? SSH keys need to be deployed to all Slave nodes from all Master nodes as part of the Geo-replication setup. So number of steps involved in setting up Geo-rep is not very easy to manage. We get more queries in `gluster-devel <http://www.gluster.org/mailman/listinfo/gluster-devel>`__ and `gluster-users <http://www.gluster.org/mailman/listinfo/gluster-users>`__ lists related to Geo-rep Setup than actually using Geo-replication, many users stopped trying Geo-replication after they faced issues during setup.

With the release of Gluster 3.7, the Geo-replication got lots of improvements. Will write blog about new features and improvements in my next blog. Yesterday I wrote a CLI tool using Python to simplify the steps involved in Geo-replication setup. Now setting up Geo-replication is as easy as running one command. Yay!

For example,

.. code-block:: bash

	sudo georepsetup <MASTERVOL> <SLAVEHOST> <SLAVEVOL>

It prompts for the Root's Password of Slave node specified in the command. That's it!

This command also produces a good summary as shown below. Now it is very easy to trace the errors and handle them.

.. image:: /images/georepsetup.png
   :alt: Summary


Install
-------
Install this tool on any one master node where you wish to initiate the Geo-replication setup,

.. code-block:: bash

	git clone https://github.com/aravindavk/georepsetup.git
	cd georepsetup
	sudo python setup.py install

This tool is not packaged as RPM/Deb Yet. Pull requests are Welcome :)

Setting up non-root Geo-replication still involves some manual steps, will try to improve in future.

Documentation is available `here <https://github.com/aravindavk/georepsetup/blob/master/README.md>`__

Comments & Suggestions Welcome.
