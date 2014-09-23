SlackBuild Emacs CVS
####################

:slug: slackbuild-emacs-cvs
:author: Aravinda VK
:date: 2009-06-16
:tags: emacs,gnu-linux,slackware
:summary: To install a package in Slackware we can use installpkg, and for upgrade we can use upgradepkg. While installing a package it will not check for dependencies.

To install a package in Slackware we can use installpkg, and for upgrade we can use upgradepkg. While installing a package it will not check for dependencies.

.. code-block:: bash

    installpkg <packagename>
    upgradepkg <packagename>
    removepkg <packagename>


But if a Slackware package is not available in official and third party repositories then we have following options to install a package.

1. :code:`./configure; make; make install`
2. Create and install Slackware package using SlackBuild script



Slackbuild is a shell script to build Slackware package by compiling respective source.

In both the case source will be compiled, but only difference is the way of doing it. Slackbuild script will create Slackware package at the end instead of installing. All the Slackware package specific actions can be applied to the package(like installpkg, upgradepkg, removepkg etc) if it is created using Slackbuild script. The generated Slackware package can be shared with others, so that they can install that package without compiling it again.  

Upgrade/Removal will be difficult if the first option is used. 

My Slackware system didn't had the latest(CVS) version of Emacs(Not available in repository also). I used the Emacs CVS Slackbuild script from `Joel J. Adamson's <http://www.unc.edu/~adamsonj/software/emacs-cvs/>`__ website, this script will download the source from Emacs CVS repository and creates Slackware package after compilation.

Script took 35 minutes in my system to create Slackware package for Emacs-cvs  :)

More details about Slackbuild script is `here <http://www.slackwiki.org/Writing_A_SlackBuild_Script>`__.
