Pebble Watchface development experiences
########################################

:slug: pebble-watchface-development-experiences
:author: Aravinda VK
:date: 2015-04-22
:tags: pebble
:summary: After seeing lots of videos and awesome watch faces, I wanted a watchface in my language.

I fell in love with the `Pebble <https://getpebble.com/>`__ Smart watch after reading `Thejesh's blog <http://thejeshgn.com/2015/01/08/liking-pebble-watch/>`__ about Pebble. I was about to get Pebble Steel, but that time they announced Pebble Time Steel with color epaper display and many more features. Now I am eagerly waiting for Pebble Time Steel :)

After seeing lots of videos and awesome watch faces, I wanted a watchface in my language. I created a sample app by embedding the Kannada Unicode font and ASCII font to test the Unicode support in Pebble. It has basic support for Unicode, but no support for complex rendering :(

.. figure:: /images/pebble_unicode_ascii.png
   :alt: Pebble Unicode Kannada

   First one is Unicode and second one using ASCII font

So I started developing digital watchface using Kannada ASCII font and it worked! Developing digital watchface is very simple, Pebble has very good documentation. I created a native app using C language. I published Kannada watchface in Pebble appstore named `kannadatime <https://apps.getpebble.com/applications/55047e53174458ce500000a5>`__. I tested only on emulator. But I was curious to see how it looks in real Pebble watch(I don't have a watch yet)

.. raw:: html
         
         <blockquote class="twitter-tweet" lang="en"><p>I don&#39;t own Pebble yet, but published my first <a href="https://twitter.com/Pebble">@Pebble</a> app. Displays Time in Kannada language <a href="https://t.co/xhnPhHonpZ">https://t.co/xhnPhHonpZ</a> C&amp;S Welcome. <a href="https://twitter.com/thej">@thej</a></p>&mdash; Aravinda (@aravindavk) <a href="https://twitter.com/aravindavk/status/576816685786624000">March 14, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Thejesh installed app on his Pebble and shared screenshot, looking awesome in real Pebble. Fonts looking smaller than I see on emulator. Thanks Thejesh :)

.. raw:: html
         
         <blockquote class="twitter-tweet" data-conversation="none" lang="en"><p>. <a href="https://twitter.com/aravindavk">@aravindavk</a> Good news the hack works. Kannada is tendered quite well. Blog about it. <a href="https://twitter.com/Pebble">@Pebble</a> <a href="http://t.co/giPmQzzo5e">pic.twitter.com/giPmQzzo5e</a></p>&mdash; Thejesh GN (@thej) <a href="https://twitter.com/thej/status/576902191077724161">March 15, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

If anybody interested in this `watchface <https://apps.getpebble.com/applications/55047e53174458ce500000a5>`__, do try and let me know if useful. I have some plans to improve this watchface by adding animation on minute change and adding color for Pebble Time.

If you don't know about Pebble, visit https://getpebble.com/ to know more.
