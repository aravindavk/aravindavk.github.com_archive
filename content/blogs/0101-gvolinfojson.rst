gvolinfojson - A utility to convert xml output of gluster volume info to json
#############################################################################

:slug: gvolinfojson
:author: Aravinda VK
:date: 2014-05-13
:tags: glusterfs,tools,glusterfsblog
:summary: A utility to convert xml output of gluster volume info to json.

Today I wrote a small utility using `golang <http://golang.org/>`__ to convert xml output of command :code:`gluster volume info` to json.

Download the binary from `here <https://github.com/aravindavk/gvolinfojson/releases/download/1.0/gvolinfojson>`__ and copy to /usr/local/bin directory(or any other directory, which is available in PATH).

.. code-block:: text

    wget https://github.com/aravindavk/gvolinfojson/releases/download/1.0/gvolinfojson
    sudo cp gvolinfojson /usr/local/bin/
    sudo chmod +x /usr/local/bin/gvolinfojson

Or

If you have golang installed(make sure :code:`$GOPATH/bin` is available in PATH), then

.. code-block:: text

    go get github.com/aravindavk/gvolinfojson

To use it with gluster volume info command,

.. code-block:: text

    sudo gluster volume info --xml | gvolinfojson

Thats it, you will get the json output of volume info command. If you need pretty json output then

.. code-block:: text

    sudo gluster volume info --xml | gvolinfojson --pretty

Source code is available `here <https://github.com/aravindavk/gvolinfojson>`__.

C & S Welcome.
