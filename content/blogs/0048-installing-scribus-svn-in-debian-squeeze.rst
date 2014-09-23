Installing Scribus svn in Debian Squeeze
########################################

:slug: installing-scribus-svn-in-debian-squeeze
:author: Aravinda VK
:date: 2011-04-11
:tags: scribus,unicode,debian
:summary: I heard that Unicode rending issues of complex scripts are fixed in svn version of Scribus(1.5). So I wanted to test it for Kannada.

I heard that Unicode rending issues of complex scripts are fixed in svn version of Scribus(1.5). So I wanted to test it for Kannada.

Downloaded svn source using following command to my Debian Squeeze machine. 

.. code-block:: bash

    svn co svn://scribus.net/trunk/Scribus myscribus


First installed cmake, which is required to compile Scribus.

.. code-block:: bash

    apt-get install cmake


When I ran :code:`cmake .` as root user, it started listing dependency issues. Installed development libraries as and when cmake throws error. Finally ended up installing following dev libraries.

.. code-block:: bash

    apt-get install libtiff4-dev python-dev libfreetype6-dev
                    libcups2-dev libxml2-dev liblcms1-dev
                    libpixman-1-dev libaspel-dev libfontconfig1-dev


Now run

.. code-block:: bash

    cd myscribus
    cmake .
    make & make install

                    
Compilation took almost an hour in my laptop. :) 

Looks like Scribus still has issues in rendering complex scripts. Will provide more information about rendering issues in my next blog post. 