Notes for Python beginners
##########################

:slug: notes-for-python-beginners
:author: Aravinda VK
:date: 2010-07-21
:tags: python
:summary: Notes for Python beginners

Using Python documentation similar to unix man pages
====================================================

.. code-block:: bash

        pydoc sys


or

.. code-block:: bash

        python -m pydoc sys


For html documentation
======================

.. code-block:: bash

        pydoc -p 9000


Now server will start running in port 9000. we can access the documentation in http://localhost:9000

To get help while working inside interpreter, type help()
=========================================================

.. code-block:: bash

        >>help()


Help prompt will come, now we can type module name to get details about that module.

.. code-block:: bash

        sys


To list functions/attributes inside a module
============================================

.. code-block:: python

        import sys
        dir(sys)


To get it in readable format

.. code-block:: python

        import sys
        for i in dir(sys):
            print i


To list builtin functions,
==========================

.. code-block:: python

        import __builtin__
        for i in dir(__builtin__):
            print i


To see which are all the modules loaded in our program
======================================================

.. code-block:: python

        import sys
        for i in sys.modules:
            print i, ": ", sys.modules[i]


Books/documentation
===================

1. `Dive into Python <http://diveintopython.org>`__ and `Dive into Python3 <http://diveintopython3.org/>`__
2. `Byte of Python <http://www.swaroopch.com/notes/Python>`__
3. `Python documentation <http://docs.python.org/>`__
4. `Python for beginners <http://wiki.python.org/moin/BeginnersGuide>`__
