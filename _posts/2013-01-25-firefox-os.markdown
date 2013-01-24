---
title: Firefox OS
tags: [firefoxos, mobile]
layout: post
desc: I was impressed by the demo videos and blog posts about Firefox OS and decided to try it on my phone Nexus S
---
I was impressed by the demo videos and blog posts about Firefox OS and decided to try it on my phone Nexus S. Searched for Nexus S ROM and found one [here](http://forum.xda-developers.com/showthread.php?t=1924367). (`TODO: Try building latest version of Firefox OS`)

Installation went smooth, followed the documentation from [here](http://forum.xda-developers.com/showthread.php?t=1924367).

<blockquote class="twitter-tweet"><p>Installing Firefox OS on my Nexus S. Fingers crossed :)</p>&mdash; Aravinda (@aravindavk) <a href="https://twitter.com/aravindavk/status/270116962045153280" data-datetime="2012-11-18T10:51:16+00:00">November 18, 2012</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<div class="sep clear"></div>

Booting is superfast and Unicode rendering is awesome, adding new fonts also easy. I just used adb (Android Debugger) to push the font from my system.

<blockquote class="twitter-tweet"><p>Installing fonts is so easy in <a href="https://twitter.com/search/%23FirefoxOS">#FirefoxOS</a>, <a href="https://twitter.com/search/%23kannada">#kannada</a> works like a charm :) <a href="https://twitter.com/search/%23mozilla">#mozilla</a> <a href="https://twitter.com/search/%23nexusS">#nexusS</a></p>&mdash; Aravinda (@aravindavk) <a href="https://twitter.com/aravindavk/status/270149288326221824" data-datetime="2012-11-18T12:59:44+00:00">November 18, 2012</a></blockquote>

<div class="sep clear"></div>

I took screenshots using ADB and ffmpeg.

{% highlight bash %}
./adb pull /dev/graphics/fb0
ffmpeg -vframes 1 -f rawvideo -pix_fmt rgb32 -s 480x800 -i fb0 ~/firefoxos_screenshots/s1.png
{% endhighlight %}

<div class="sep clear"></div>

![Lock screen](/photo/firefoxos/s1.png) &nbsp; ![Twitter app](/photo/firefoxos/s2.png)
<span class="imgCaption">Lock screen and Twitter app</span>

<div class="sep clear"></div>

![Kannada in browser](/photo/firefoxos/s3.png) &nbsp; ![Camera](/photo/firefoxos/s4.png)
<span class="imgCaption">Kannada in browser and Camera in action</span>

<div class="sep clear"></div>

![Kannada in Twitter app](/photo/firefoxos/s5.png) &nbsp; ![Keyboard](/photo/firefoxos/s12.png)
<span class="imgCaption">Kannada in Twitter app(Special case text using Zero Width Joiner) and Keyboard</span>

<div class="sep clear"></div>

![Apps](/photo/firefoxos/s7.png) &nbsp; ![Marketplace](/photo/firefoxos/s8.png)
<span class="imgCaption">Apps and Marketplace</span>

<div class="sep clear"></div>

![Dailer](/photo/firefoxos/s9.png) &nbsp; ![Outgoing call](/photo/firefoxos/s10.png)
<span class="imgCaption">Dailer and Outgoing call screen</span>

<div class="sep clear"></div>

![Alt Tab](/photo/firefoxos/s11.png) &nbsp; ![Alt Tab](/photo/firefoxos/s6.png)
<span class="imgCaption">When home button is long pressed</span>

<div class="sep clear"></div>

![Settings](/photo/firefoxos/s13.png) &nbsp; ![Notification slider](/photo/firefoxos/s14.png)
<span class="imgCaption">Settings and notification slider</span>

<div class="sep clear"></div>

![Power Button](/photo/firefoxos/s15.png)
<span class="imgCaption">When power button long pressed</span>

<div class="sep clear"></div>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Used it for a day and changed it back to Cynogenmod since it was not yet ready for day to day use. 

Hoping to learn more about Firefox OS in [Firefox OS App Days](https://wiki.mozilla.org/Engagement/Developer_Engagement/FirefoxAppDays).
