Firefox OS
##########

:slug: firefox-os
:author: Aravinda VK
:date: 2013-01-25
:tags: firefoxos,mobile
:summary: I was impressed by the demo videos and blog posts about Firefox OS and decided to try it on my phone Nexus S

I was impressed by the demo videos and blog posts about Firefox OS and decided to try it on my phone Nexus S. Searched for Nexus S ROM and found one `here <http://forum.xda-developers.com/showthread.php?t=1924367>`__. (`TODO: Try building latest version of Firefox OS`)

Installation went smooth, followed the documentation from `here <http://forum.xda-developers.com/showthread.php?t=1924367>`__.

.. raw:: html

    <blockquote class="twitter-tweet"><p>Installing Firefox OS on my Nexus S. Fingers crossed :)</p>&mdash; Aravinda (@aravindavk) <a href="https://twitter.com/aravindavk/status/270116962045153280" data-datetime="2012-11-18T10:51:16+00:00">November 18, 2012</a></blockquote>


Booting is superfast and Unicode rendering is awesome, adding new fonts also easy. I just used adb (Android Debugger) to push the font from my system.

.. raw:: html

    <blockquote class="twitter-tweet"><p>Installing fonts is so easy in <a href="https://twitter.com/search/%23FirefoxOS">#FirefoxOS</a>, <a href="https://twitter.com/search/%23kannada">#kannada</a> works like a charm :) <a href="https://twitter.com/search/%23mozilla">#mozilla</a> <a href="https://twitter.com/search/%23nexusS">#nexusS</a></p>&mdash; Aravinda (@aravindavk) <a href="https://twitter.com/aravindavk/status/270149288326221824" data-datetime="2012-11-18T12:59:44+00:00">November 18, 2012</a></blockquote>


I took screenshots using ADB and ffmpeg.

.. code-block:: bash

    ./adb pull /dev/graphics/fb0
    ffmpeg -vframes 1 -f rawvideo -pix_fmt rgb32 -s 480x800 -i fb0 ~/firefoxos_screenshots/s1.png

.. image:: /images/firefoxos/s1.png
   :alt: Lock screen
.. image:: /images/firefoxos/s2.png
   :alt: Twitter app

*Lock screen and Twitter app*

.. image:: /images/firefoxos/s3.png
   :alt: Kannada in browser
.. image:: /images/firefoxos/s4.png
   :alt: Camera

*Kannada in browser and Camera in action*

.. image:: /images/firefoxos/s5.png
   :alt: Kannada in Twitter app
.. image:: /images/firefoxos/s12.png
   :alt: Keyboard

*Kannada in Twitter app(Special case text using Zero Width Joiner) and Keyboard*

.. image:: /images/firefoxos/s7.png
   :alt: Apps
.. image:: /images/firefoxos/s8.png
   :alt: Marketplace

*Apps and Marketplace*

.. image:: /images/firefoxos/s9.png
   :alt: Dailer
.. image:: /images/firefoxos/s10.png
   :alt: Outgoing call

*Dailer and Outgoing call screen*

.. image:: /images/firefoxos/s11.png
   :alt: Alt Tab
.. image:: /images/firefoxos/s6.png
   :alt: Alt Tab

*When home button is long pressed*

.. image:: /images/firefoxos/s13.png
   :alt: Settings
.. image:: /images/firefoxos/s14.png
   :alt: Notification slider

*Settings and notification slider*

.. image:: /images/firefoxos/s15.png
   :alt: Power Button

*When power button long pressed*

Used it for a day and changed it back to Cynogenmod since it was not yet ready for day to day use. 

Hoping to learn more about Firefox OS in `Firefox OS App Days <https://wiki.mozilla.org/Engagement/Developer_Engagement/FirefoxAppDays>`__.

.. raw:: html

    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
