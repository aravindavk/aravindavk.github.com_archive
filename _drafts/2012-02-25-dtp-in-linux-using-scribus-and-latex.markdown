{"type":"blog","title":"DTP in Linux using Scribus and LaTeX", "url":"dtp-in-linux-using-scribus-and-latex", "tags":"scribus,latex,xelatex,dtp", "date":"02/07/2012 08:30:06" }

If **LaTeX/XeLaTeX** is awesome for text processing then why Scribus?

If **Scribus** is too good software for DTP then why LaTeX/XeLaTeX?

Puzzled?

Scribus is an Open Source alternative to InDesign, unfortunately Unicode/OpenType/TrueType support is incomplete. Eventhough it is a powerfull DTP software we can't use it for DTP in Indic languages(Or any other complex scripts).

LaTeX/XeLaTeX is very good at handling Indic and other Unicode languages with the help of fontspec package, the quality of text produced is very good. But to create fancy layouts/designs we end up in investing lot of time in learning/searching LaTeX packages.

Other candidates to consider for DTP in Linux are Inkscape and LibreOffice. Inkscape is good for creating single page artworks like banners, business cards etc. To create multiple page documents/books, we can try creating each page as different layers and then export it as different pdf. As a final step we can combine all the PDFs into one. But with this method, applying master styles and adding page numbers is pain.

In LibreOffice/OpenOffice we can use the "Frame" to create flexible layouts. We can even link two or more frames and make the content flow from one frame to another. But the UI is not very comfortable for DTP since it is not created for that purpose, also we again miss the master pages(Even though we can customize all pages using headers and footers).

Other thing I tried is to use Scribus with ASCII fonts(Kannada). Since ASCII Kannada fonts doesn't have complex rules or reordering of glyphs it is well supported in Scribus. With this method using multiple languages within a frame is pain since ASCII Kannada shares the encoding with english and other chars. If we decided to use this method by ignoring that issue, then we need to create Unicode to ASCII converter or ASCII input methods for Linux. Another issue is that it is not the standard supported in most of the systems/apps(say pdf text reader) and also generated pdf is not searchable.

I will not go in detail about the options available in Scribus, feel free to refer Scribus documentation. I will jump into configuring LaTeX/XeLaTeX as rendering frame engine.

Firstly install Scribus and TeXLive, I suggest installing LaTeX from TexLive instead of installing it from repository(In Ubuntu/Fedora TexLive version is 2009, but TeXLive latest release is 2011). Refer my previous blog about installing TeXLive and configuring it to work for Kannada.




