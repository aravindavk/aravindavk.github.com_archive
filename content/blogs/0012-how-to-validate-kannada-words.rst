How to validate kannada words?
##############################

:slug: how-to-validate-kannada-words
:author: Aravinda VK
:date: 2009-01-12
:tags: python,javascript
:summary: In this article we will discuss the Unicode range validation using Python regular expressions and JavaScript regular expressions. For illustration i have used Kannada, same can be applied to other languages as well.

In this article we will discuss the Unicode range validation using Python regular expressions and JavaScript regular expressions. For illustration i have used Kannada, same can be applied to other languages as well. 

Where it can be used?
---------------------

* Suppose users can submit articles in your website and you need to check every article should have more than 60% Kannada words. 
* Validation for localized websites
* and many more...

Kannada Unicode range as per the standard is  u0C80 to u0CFF, refer `Unicode.org website <http://unicode.org/charts/PDF/Unicode-4.0/U40-0C80.pdf>`__

Using Python
------------

.. code-block:: python

    # file: validateKannadaWords.py
    # -*- coding: utf-8 -*-
    import re
    
    # function checks the input word is Kannada word or not
    # @params word - Input word to validate
    # @returns True - If success, False - If failure
    # @author Aravinda VK
    # @date - 09-Nov-2008
    
    def isKannadaWord(word):
        rangeStart = ur"\u0C80"
        rangeEnd = ur"\u0CFF"
        pattern = rangeStart + '-' + rangeEnd 
        if re.match('^[' + pattern + ']+$',word) != None:
            return True
        else:
            return False


"ur" in above code refers to raw unicode. 

How to use
^^^^^^^^^^

.. code-block:: python

    myString = u'ಅರವಿಂದ ಒಲವು ಅವಳು ಮತ್ತು ನಾಳೆ abcd ಹೆಹೆ '
    wordsList = myString.split()
    for eachWord in wordsList:
        if isKannadaWord(eachWord) :
            print eachWord + ' is a Kannada word'
        else:
            print eachWord + ' is not a Kannada word'


Using Javascript
----------------

.. code-block:: javascript

    // function checks the input word is Kannada word or not
    // @params word - Input word to validate
    // @returns True - If success, False - If failure
    // @author Aravinda VK
    // @date - 09-Nov-2008
    
    function isKannadaWord(word) {
        var re = new RegExp(/^[\u0C80-\u0CFF]+$/);  
        if (word.match(re))  {
            return true;
        }
        else {
            return false;
        }
    }


How to use
^^^^^^^^^^

.. code-block:: javascript

    var inputwords = new Array("ಅರವಿಂದ", "ಒಲವು", "ಅವಳು", "ಮತ್ತು", "ನಾಳೆ", "abcd", "ಹೆಹೆ");
    for(i=0;i<2;i++) {
        if (isKannadaWord(inputwords[i])) {
            document.write("<b>" + inputwords[i] + "</b> is a valid Kannada Word<br/>");
        }
        else
            document.write("<b>" + inputwords[i] + "</b> is Not a Kannada Word<br/>");
    }



