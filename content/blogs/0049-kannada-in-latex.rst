Kannada in LaTeX
################

:slug: kannada-in-latex
:author: Aravinda VK
:date: 2011-04-14
:tags: TeX,XeTeX,LaTeX,unicode,kannada
:summary: We can use Kannada with XeTeX. But to use additional features of the language like hyphenation, kannada numerals etc. We need to have necessory definitions file in place. TeXLive 2010 has kannada hyphenation packages, only missing thing is gloss-kannada.ldf, Polyglossia file which will have all the details about hyphenation files, numbering systems etc.

From `Wikipedia <http://en.wikipedia.org/wiki/XeTeX>`__

    XeTeX (English pronunciation "zee-TeX" i.e. /ˈziːtɛx/ or often /ˈziːtɛk/) is a TeX typesetting engine using Unicode and supporting modern font technologies such as OpenType or Apple Advanced Typography (AAT).

Hello World in Kannada
======================

.. code-block:: latex

    % File: helloworld.tex
    \documentclass{article}
    \usepackage{fontspec}
    \usepackage{polyglossia}
    \setmainfont[Script=Kannada]{Lohit Kannada}
    
    \begin{document}
    ಸಿರಿಗನ್ನಡಂ ಗೆಲ್ಗೆ! 
    \end{document}


We can use Kannada with XeTeX. But to use additional features of the language like hyphenation, kannada numerals etc. We need to have necessory definitions file in place. TeXLive 2010 has kannada hyphenation packages, only missing thing is gloss-kannada.ldf, Polyglossia file which will have all the details about hyphenation files, numbering systems etc.

According to Polyglossia documentation(:code:`texdoc polyglossia`),

1. Loading the appropriate hyphenation patterns.
2. Setting the script and language tags of the current font (if possible and available), via the package fontspec.
3. Switching to a font assigned by the user to a particular script or language.
4. Adjusting some typographical conventions according to the current language (such as afterindent, frenchindent, spaces before or after punctuation marks, etc.).
5. Redeﬁning all document strings (like “chapter”, “ﬁgure”, “bibliography”).
6. Adapting the formatting of dates (for non-Gregorian calendars via external packages bundled with polyglossia: currently the Hebrew, Islamic and Farsi calendars are supported).
7. For languages that have their own numbering system, modifying the formatting of numbers appropriately (this also includes redeﬁning the alphabetic sequence for non-Latin alphabets)
8. Ensuring proper directionality if the document contains languages that are written from right to left (via the package bidi, available separately).


So created the gloss-kannada.ldf file and is available for `download <https://github.com/aravindavk/polyglossia-kannada>`__. Thanks to `Shankar Prasad <http://twitter.com/shankar_prasad>`__ who helped me in updating the translations required for the gloss-kannada.ldf file.

Once we install gloss-kannada.ldf file we will get following benifits.

1. Hyphenation for Kannada. (Existing hyph-kn file will be mapped)
2. Kannada numerals can be used as \kannadanumber{1984}
3. Kannada dates
4. Kannada strings for all document strings (like “chapter”, “ﬁgure”, “bibliography”).


Since Debian Squeeze has TeXLive 2009, I downloaded TeXLive 2010 from `here <http://www.tug.org/texlive/acquire-iso.html>`__. Uninstalled all the components of TeXLive 2009 in my Debian system using

.. code-block:: bash

    apt-get remove texlive*


Mount the iso image downloaded and install TexLive 2010 as follows.

.. code-block:: bash

    mkdir /tmp/texlive
    mount -o loop texlive-2010.iso /tmp/texlive
    cd /tmp/texlive
    ./install-tl


This will ask for prompt, type "I" to install in your system. TeXLive will be installed in :code:`/usr/local/texlive/2010` directory. We need to set the environment variable PATH for future use of XeTeX. If we set in .bashrc in home directory, then these will be only available to that user. Since we need system wide configuration we will add in :code:`/etc/bash.bashrc` or :code:`/etc/profile`

If you are adding in :code:`/etc/profile` then we have to logout and login to affect the changes. Make sure you add before the :code:`export PATH` statement in :code:`/etc/profile`

If you are planning to add in :code:`/etc/bash.bashrc` then add it in the end. 

.. code-block:: bash

    PATH=/usr/local/texlive/2010/bin/i386-linux:$PATH; export PATH
    MANPATH=/usr/local/texlive/2010/texmf/doc/man:$MANPATH; export MANPATH
    INFOPATH=/usr/local/texlive/2010/texmf/doc/info:$INFOPATH; export INFOPATH


Add the following in :code:`/etc/manpath.config`

.. code-block:: bash

    MANPATH_MAP /usr/local/texlive/2010/bin/i386-linux /usr/local/texlive/2010/texmf/doc/man

Once the PATH is configured, I copied the gloss-kannada.ldf file to the polyglossia directory.

.. code-block:: bash

    cp gloss-kannada.ldf /usr/local/texlive/2010/texmf-dist/tex/xelatex/polyglossia/


Then run the following to update the TeX directory structure and language specific files.

.. code-block:: bash

    texhash
    fmtutil --byfmt xelatex


Make sure :code:`hyph-kn.tex` and :code:`loadhyph-kn.tex` files exists in :code:`/usr/local/texlive/2010/texmf-dist/tex/generic/hyph-utf8/patterns/tex/` and :code:`/usr/local/texlive/2010/texmf-dist/tex/generic/hyph-utf8/loadhyph/` respectively.

Now we are ready with the installation of TeXLive. Let us create a TeX file to test hyphenation works or not! Added :code:`\setdefaultlanguage` additionally. 

.. code-block:: latex

    % File: bigtext.tex
    \documentclass{article}
    \usepackage{fontspec}
    \usepackage{polyglossia}
    \setdefaultlanguage[numerals=Kannada]{kannada}
    %% If english numerals required \setdefaultlanguage[numerals=Western]{kannada}
    \setmainfont[Script=Kannada]{Lohit Kannada}
    \newfontfamily\english{FreeSerif}
    %% New command to switch to English in between
    \newcommand{\en}[1]{{\english #1}}
    \setlength{\parindent}{0pt} % No indentation for paragraphs
    \title{ಮದುವೆಯ ನೆನಪು ಉಳಿಯಿತು}
    \date{}
    \begin{document}
    \maketitle
    
    ಸ್ನೇಹಿತರೊಬ್ಬರು ಕಳೆದ ವಾರ ತಮ್ಮ ಅಣ್ಣನ ಮಗಳ ಮದುವೆಯ ಫೋಟೊ ತೆಗೆದಿದ್ದರು. ಮೊನ್ನೆ ಅದೇನೋ ಮಾಡುತ್ತಿರುವಾಗ
    ಎಲ್ಲ ಫೋಟೊಗಳು ಮೆಮೊರಿ ಕಾರ್ಡ್ ನಿಂದ ಅಳಿಸಿ ಹೋಯ್ತಂತೆ. ಮರುದಿನ ಅವರ ಮನೆಗೆ ನಾನು ಹೋಗಿದ್ದಾಗ, ಅವರು
    ಹೇಳಿದ್ರು "ಮಾರಾಯ ಮದುವೇದು ಒಳ್ಳೋಳ್ಳೆ ಫೋಟೊಸ್ ಅಳಿಸಿ ಹೋತು...ಹ್ಯಂಗಾರು ಅದನ್ನ ರೆಕವರಿ ಮಾಡಕ್ಕೆ ಬತ್ತ"
    ಅಂದ್ರು. ಸರಿ, ರಿಕವರಿ ಮಾಡಬಹುದು ಅಂತ ಹೇಳಿ ಆ ಮೆಮೊರಿ ಕಾರ್ಡ್ ತೆಗೆದುಕೊಂಡು ಸೀದಾ ನಮ್ಮ ದೇವರು ಭಟ್ಟರ
    \en{Institute} ಗೆ ಬಂದೆ. ಅವರ ಒಂದು ಸಿಸ್ಟಮ್ ನಲ್ಲೆ ಮೊದಲೆ ಉಬಂಟು ಅನುಸ್ಥಾಪನೆ ಆಗಿತ್ತು. ಹಾಗೆ ಉಬಂಟು
    ರೆಪೊದಿಂದ \en{"testdisk"} ಅನ್ನೊ ಮುಕ್ತತಂತ್ರಂಶವನ್ನು ಅನುಸ್ಥಾಪನೆ ಮಾಡಿದೆ. ನಂತರ ಟರ್ಮಿನಲ್
    \en{(command prompt)}ನಲ್ಲಿ \en{testdisk} ಸ್ಟಾರ್ಟ್ ಮಾಡಿ ರೆಕವರಿ ಮಾಡ್ಬೇಕಾದ ಮೆಮೊರಿಕರ್ಡ್ ಸೆಲೆಕ್ಟ್ ಮಾಡಿ
    \en{undelete option} ಎಂಟರ್ ಮಾಡಿ ನಾನು ಊಟಕ್ಕೆ ಹೊರಟೆ. ನಂತರ ಬಂದು ನೊಡಿದ್ರೆ ಎಲ್ಲಾ ಎಂಟುನೂರು
    ಫೋಟೊಗಳು \en{(1.6 GB)} ಹೋಮ್ ಡೈರೆಕ್ಟ್ರಿಗೆ ಕಾಪಿ ಆಗಿದ್ವು. ಮತ್ತೆ ಎಲ್ಲಾ ಫೋಟೊಗಳನ್ನು ಮೆಮೊರಿಕಾರ್ಡಿಗೆ ಕಾಪಿ
    ಮಾಡಿ ಅವರಿಗೆ ಕೊಟ್ಟಾಗ ಅವರು "ಅಂತೂ ಮದುವೆ ನೆನಪು ಉಳೀತು ಮಾರಾಯ" ಅಂದ್ರು. ಅವರ ಮುಖದಲ್ಲಿನ ಸಂತೋಷ
    ಕಂಡು ನಂಗೂ ಖುಷಿ ಆಯ್ತು. ಅಲ್ಲೇ ಮುಕ್ತತಂತ್ರಂಶದ ಬಗ್ಗೆ ಮತ್ತೊಂದಿಷ್ಟನ್ನ ಹೇಳಿ ಈಚೆ ಬಂದೆ. ಹಾಗೆ ದೇವರುಭಟ್ಟರಿಗೆ ಮತ್ತೊಂದು
    ಧನ್ಯವಾದ ಹೇಳಿ ಮನೆಗೆ ಬಂದೆ. ನಿಮಗೂ ಇದೆ ರೀತಿ ಏನಾದ್ರು ರಿಕವರಿ ಮಾಡ್ಬೇಕಿದ್ದಾಗ ಈ \en{testdisk} ನ ಬಳಸಿ ನೋಡಿ.
    \vskip 1cm
    ಗೆಳೆಯ ಸುಧೀಂದ್ರ ಬರೆದ ಲೇಖನ \en{http://sampada.net/blog/sudhimail/22/02/2010/24125}
    
    \end{document}


Output of this is

.. image:: /images/latex_kannada_hyph/m.jpg
   :alt: Kannada Hyphenation LaTeX

For easy switching between different fonts/languages I used newcommand method as suggested by `summer_glau <http://sampada.net/user/summerglau>`__ in `Sampada <http://sampada.net/latex-%E0%B2%AA%E0%B2%B0%E0%B2%BF%E0%B2%9A%E0%B2%AF-%E0%B2%AE%E0%B2%A4%E0%B3%8D%E0%B2%A4%E0%B3%81-%E0%B2%95%E0%B2%A8%E0%B3%8D%E0%B2%A8%E0%B2%A1%E0%B2%A6%E0%B2%B2%E0%B3%8D%E0%B2%B2%E0%B2%BF-latex>`__

Btw, I haven't told how we can run these files :) When we run :code:`xelatex filename.tex` the PDF will be created with the same name.

Issues:
=======
1. TeXLive 2010 has issue in rendering \u0C8E\u0C82 (ಎಂ). As per my knowledge TeXLive uses ICU as Unicode rendering engine. 
2. Kedage didn't have hyphenation glyph in the font. Hyphen in Lohit Kannada looks bigger.
