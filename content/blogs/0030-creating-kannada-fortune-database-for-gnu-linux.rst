Creating Kannada fortune database for Gnu Linux
###############################################

:slug: creating-kannada-fortune-database-for-gnu-linux
:author: Aravinda VK
:date: 2009-09-25
:tags: kannada,fortune,gnu-linux
:summary: Install fortune package in your system, just type `fortune` in command prompt to see how it will work. Refer manual page to see the options available in fortune.

`fortune <http://en.wikipedia.org/wiki/Fortune_%28program%29>`__ is an awesome application in Gnu/Linux, which picks random quote from the dictionary and displays it.

Install fortune package in your system, just type :code:`fortune` in command prompt to see how it will work. Refer manual page to see the options available in fortune.

.. code-block:: bash

    man fortune


It will be nice if we create the database for Kannada quotes in the format as required by the fortune.

Let us discuss the format of the file with an example. (File is named as kan) 

.. code-block:: text

    ಹುಲ್ಲಾಗು ಬೆಟ್ಟದಡಿ, ಮನೆಗೆ ಮಲ್ಲಿಗೆಯಾಗು
    ಕಲ್ಲಾಗು ಕಷ್ಟಗಳ ಮಳೆಯ ವಿಧಿ ಸುರಿಯೇ
    ಬೆಲ್ಲ ಸಕ್ಕರೆಯಾಗು ದೀನ ದುರ್ಬಲರಿಂಗೆ
    ಎಲ್ಲರೊಳಗೊಂದಾಗು ಮಂಕುತಿಮ್ಮ
    %
    ಎಲ್ಲರಿಗಮೀಗ ನಮೊ - ಬಂಧುಗಳೆ, ಭಾಗಿಗಳೆ
    ಉಲ್ಲಾಸವಿತ್ತವರೆ, ಮನವ ತೊಳೆದವರೆ
    ಟೊಳ್ಳು ಜಗ, ಸಾಕು ಬಾಳ್ - ಎನಿಸಿ ಗುರುವಾದವರೆ
    ಕೊಳ್ಳಿರೀ ನಮವನೆನು
    %
    ಕುಸುಮಸಖನೇಂ ನೀನು? ಹಿಸುಕದೆಯೆ ಮೂಸದನು
    ಹಿಸುಕೆ ಕಟುಕಂಪು; ನರಲೋಕವದರವೊಲೇ
    ಗಸಿಯ ಕಲಕದೆ ಕೊಳದ ಮೇಲ್ತಿಳಿಯ ಕುಡಿದು ನಡೆ
    ಹಸನು ಹಗುರದ ಬಾಳು

Use % as delimiter to seperate one quote to another. Once the above file is ready with all the required quotes, then use following command to compile this file into fortune dictionary.

.. code-block:: bash

    strfile kan kan.dat


Now a dat file is created in that directory. Copy both the files into fortunes directory. (Below mentioned folder format is with respect to Debian)

.. code-block:: bash

    cp kan* /usr/share/games/fortunes/


Now everything is ready. Run fortune by passing new dict name as parameter.

.. code-block:: bash

    fortune kan


When we find more quotes, we can add to the same dict and use it.

Enjoy!
