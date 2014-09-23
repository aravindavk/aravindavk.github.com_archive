Space Glyph issue in Lohit Kannada Font
#######################################

:slug: space-glyph-issue-in-lohit-kannada-font
:author: Aravinda VK
:date: 2010-01-15
:tags: kannada,fonts
:summary: Lohit Kannada is one of the good fonts available for Kannada. But the “space” glyph has very less width, results in less space between the words.


Lohit Kannada is one of the good fonts available for Kannada. But the “space” glyph has very less width, results in less space between the words.

This will have high impact on readability. I increased the width of “space” glyph from 128 to 540 using Fontforge and regenerated the ttf font, now it looks better.

.. image:: /images/lohit-kannada-space-bug-before.png
   :alt: Without change

.. image:: /images/lohit-kannada-space-bug-after.png
   :alt: After the change

Anybody facing similar issue?

**[Update 2010-03-25 20:30:35]** 

Issue is fixed in latest Lohit Kannada font, check `here <https://bugzilla.redhat.com/show_bug.cgi?id=559462>`__
