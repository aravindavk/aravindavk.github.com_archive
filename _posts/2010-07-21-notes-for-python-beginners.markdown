---
title: Notes for Python beginners
tags: [python]
layout: post
desc: Notes for Python beginners
---
### Using Python documentation similar to unix man pages

{% highlight bash %}
    pydoc sys
{% endhighlight %}

or

{% highlight bash %}
    python -m pydoc sys
{% endhighlight %}

### For html documentation

{% highlight bash %}
    pydoc -p 9000
{% endhighlight %}

Now server will start running in port 9000. we can access the documentation in http://localhost:9000

### To get help while working inside interpreter, type help()

{% highlight bash %}
    >>help()
{% endhighlight %}

Help prompt will come, now we can type module name to get details about that module.

{% highlight bash %}
    sys
{% endhighlight %}

### To list functions/attributes inside a module

{% highlight python %}             
    import sys
    dir(sys)
{% endhighlight %}

To get it in readable format

{% highlight python %}
    import sys
    for i in dir(sys):
        print i
{% endhighlight %}

### To list builtin functions,

{% highlight python %}
    import __builtin__
    for i in dir(__builtin__):
        print i
{% endhighlight %}

### To see which are all the modules loaded in our program

{% highlight python %}
    import sys
    for i in sys.modules:
        print i, ": ", sys.modules[i]
{% endhighlight %}

### Books/documentation

1. [Dive into Python](http://diveintopython.org) and [Dive into Python3](http://diveintopython3.org/)
2. [Byte of Python](http://www.swaroopch.com/notes/Python)
3. [Python documentation](http://docs.python.org/)
4. [Python for beginners](http://wiki.python.org/moin/BeginnersGuide)

