---
title: Space Glyph issue in Lohit Kannada Font
tags: [kannada,fonts]
layout: post
desc: Lohit Kannada is one of the good fonts available for Kannada. But the “space” glyph has very less width, results in less space between the words.
---

Lohit Kannada is one of the good fonts available for Kannada. But the “space” glyph has very less width, results in less space between the words.

This will have high impact on readability. I increased the width of “space” glyph from 128 to 540 using Fontforge and regenerated the ttf font, now it looks better.

 ![Without change](http://lh4.ggpht.com/_bsVZQwrFrRE/S0_4MVkb-xI/AAAAAAAADTY/tpjLlZMK-NU/lohit-kannada-space-bug-before.png)

 ![After the change](http://lh4.ggpht.com/_bsVZQwrFrRE/S0_4MoFeHTI/AAAAAAAADTc/gIMRglsyfR0/lohit-kannada-space-bug-after.png)

Anybody facing similar issue?

**[Update 2010-03-25 20:30:35]** Issue is fixed in latest Lohit Kannada font, check [here](https://bugzilla.redhat.com/show_bug.cgi?id=559462)
