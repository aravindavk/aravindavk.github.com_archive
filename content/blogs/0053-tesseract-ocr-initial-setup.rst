Tesseract OCR initial setup
###########################

:slug: tesseract-ocr-initial-setup
:author: Aravinda VK
:date: 2011-04-28
:tags: tesseract,OCR,Kannada OCR
:summary: Tesseract OCR needs to be trained for Kannada and other Indic languages.


Tesseract OCR is
================

    The `Tesseract OCR <http://code.google.com/p/tesseract-ocr/>`__ engine was one of the top 3 engines in the 1995 UNLV Accuracy test. Between 1995 and 2006 it had little work done on it, but it is probably one of the most accurate open source OCR engines available. The source code will read a binary, grey or color image and output text. A tiff reader is built in that will read uncompressed TIFF images, or libtiff can be added to read compressed images.   

Tesseract OCR needs to be trained for Kannada and other Indic languages. 

Downloaded latest version of Tesseract OCR from svn repository and installed in my system.

.. code-block:: bash

    svn checkout http://tesseract-ocr.googlecode.com/svn/trunk/ tesseract-ocr
    ./configure
    make
    make install


Tesseract OCR looks for training data in :code:`/usr/local/share/tessdata` directory. If we train anything new then we have to copy .traineddata file to this directory.

I divided training process into four steps.

1. Image generation
2. Generate box
3. Edit Box file
4. Generate trained data


I use Gimp to create tif images required for training. If you have jpg or png image convert to tif using

.. code-block:: bash

    convert -depth 4 sample.jpg sample.tif


I have :code:`apps` directory in my home directory, which is added to PATH using

.. code-block:: bash

    PATH=/home/aravinda/apps:PATH; export PATH


I use this directory to save all my personal scripts and applications.

Created a script called tessGenBox in apps directory, which accepts lang name as parameter.

.. code-block:: bash

    #!/bin/sh
    tesseract $1.tif $1 batch.nochop makebox


Since only one font is used for exploring Tesseract traning options, not worried much on naming conventions. (Actual file name format is [lang].[fontname].[exp][num])

I downloaded `QT based box editor <https://github.com/zdenop/qt-box-editor/>`__ as mentioned in the Tesseract wiki. After the installation copied :code:`qt-box-editor-1.04dev` file to apps directory and created shell script called tessBoxEdit in apps directory.

.. code-block:: bash

    #!/bin/sh
    /home/aravinda/apps/qt-box-editor-1.04dev $1


Tif filename as parameter.

I created one more script tessGenData, which I will use to generate trained data based on previously generated box file.(Accepts language name as parameter)

.. code-block:: bash

    #!/bin/sh
    tesseract $1.tif $1 nobatch box.train
    unicharset_extractor $1.box
    echo $1 0 0 0 0 0 > font_properties
    mftraining -F font_properties -U unicharset $1.tr 
    mftraining -F font_properties -U unicharset -O $1.unicharset $1.tr
    cntraining $1.tr
    mv Microfeat $1.Microfeat
    mv normproto $1.normproto 
    mv pffmtable $1.pffmtable
    mv mfunicharset $1.mfunicharset
    mv inttemp $1.inttemp
    combine_tessdata $1.
    # Used su since I use Debian, use sudo if you are using Ubuntu
    su -c "cp $1.traineddata /usr/local/share/tessdata/"


It will ask password at the end to copy trained data file to :code:`/usr/local/share/tessdata`

I created two additional scripts to clean the space in between if required.

tessCleanAfterBox - cleans the directory by removing all generated files except .box file

.. code-block:: bash

    #!/bin/sh
    rm font_properties*
    rm $1.txt
    rm $1.normproto
    rm $1.traineddata
    rm $1.unicharset
    rm $1.mfunicharset
    rm $1.Microfeat
    rm $1.pffmtable
    rm $1.tr
    rm $1.inttemp
    rm unicharset
    rm *.bak


tessCleanAll - Cleans all data including box file except images. 

.. code-block:: bash

    #!/bin/sh
    rm font_properties*
    rm $1.txt
    rm $1.box
    rm $1.normproto
    rm $1.traineddata
    rm $1.unicharset
    rm $1.mfunicharset
    rm $1.Microfeat
    rm $1.pffmtable
    rm $1.tr
    rm $1.inttemp
    rm unicharset
    rm *.bak


Once these scripts are created, we need to make these files as executable.

.. code-block:: bash

    chmod +x /home/aravinda/apps/tess*


Usage
=====

Let us imagine a name for lang(In the final deployment it should be kan for Kannada. For experimentation we can give any name)

For this example, let lang as kan1

1. Create a image with sample text and save as kan1.tif
2. Create a box file :code:`tessGenBox kan1`
3. Edit box file :code:`tessBoxEdit kan1`
4. Generate trained data :code:`tessGenData kan1` and provide password.


If you want to edit box file and train again

1. Edit box file :code:`tessBoxEdit kan1`
2. Clean the directory :code:`tessCleanAfterBox kan1`
3. Generate trained data :code:`tessGenData kan1` and provide password.


If image is changed, clean all and regenerate trained data. 

1. Clean the directory :code:`tessCleanAll kan1`
2. Create a box file :code:`tessGenBox kan1`
3. Edit box file :code:`tessBoxEdit kan1`
4. Generate trained data :code:`tessGenData kan1` and provide password.


If I forget above commands, I will just type tess and press tab twice to get list of all these commands. 

Now I can concentrate more on the pattern matching and other issues instead of memorizing each steps involved in the training.

C & S Welcome. 
