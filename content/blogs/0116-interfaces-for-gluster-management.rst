Interfaces for Gluster Management
#################################

:slug: interfaces-for-gluster-management
:author: Aravinda VK
:date: 2016-02-09
:tags: gluster, glusterfsblog
:summary: But Gluster CLIs are not enough for managing from remote place or to integrate with third party Management/Monitoring tools

Gluster provides CLIs to manage the Cluster, which can be
programmatly consumed by passing ``--xml`` option. For example,

.. code-block:: bash

	gluster volume info --xml

But Gluster CLIs are not enough for managing from remote place or to
integrate with third party Management/Monitoring applications like `Cockpit <http://cockpit-project.org/>`__,
`Skyring <https://github.com/skyrings/skyring>`__, `Nagios <http://nagios.org/>`__ etc. We need more interfaces to enable integration
with these tools.

Language bindings for Gluster CLI commands
-------------------------------------------
How about importing the ``glustercli`` in your favorite programming
language and start using it?

For example in Python,

.. code-block:: python
				
	from glustercli import volumes

	gv1 = volumes.Volume("gv1")
	gv1.start()

**Status:** `Python <https://github.com/aravindavk/glustertool/tree/master/glustertool/utils/glustercli>`__ and `Go <https://github.com/aravindavk/glustercli>`__ bindings are in progress

Ansible APIs for Gluster
------------------------
`Ansible <http://www.ansible.com/>`__ is present favorite tool for Sysadmins.

    App deployment, configuration management and orchestration - all from one system. - www.ansible.com

`gdeploy <https://github.com/gluster/gdeploy>`__ (name may change in future) is a Ansible based tool for easy management of Gluster.

**Status:** `gdeploy <https://github.com/gluster/gdeploy/blob/2.0/doc/gdeploy-2>`__ team is working on version 2.0

Storaged Gluster APIs
---------------------
Gluster module for `storaged <http://storaged-project.github.io/>`__ enables integration with Cockpit. Cockpit
can communicate with Storaged to get Gluster tasks done.

**Status:** `Samikshan <https://samxan.wordpress.com/>`__ is working on this feature.

REST APIs for Gluster
---------------------
Common API format to integrate with Web applications. Any
web application can easily communicate with Gluster using HTTP calls.

For example, Web application can send HTTP POST request to Start the
Volume

.. code-block:: bash

    curl -X POST \
        -H "content-type: application/json" \
        -H "Date: Tue, 09 Feb 2016 12:38:10 +0000" \
        -H "Authorization: HMAC_SHA256 MyApp:g0b1IOmdRMOlPs2f5D4UJPgng9tNUuY0k+c+ee/k2Hk=" \
        http://hostname/v1/volumes/gv1/start

**Status:** In progress. Watch this space for more update about this feature :)

Are you using any interface for managing Gluster? Please share your
experiences.
