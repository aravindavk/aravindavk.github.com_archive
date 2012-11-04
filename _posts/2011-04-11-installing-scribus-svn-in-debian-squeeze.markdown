---
title: Installing Scribus svn in Debian Squeeze
tags: [scribus, unicode, debian]
layout: post
desc: I heard that Unicode rending issues of complex scripts are fixed in svn version of Scribus(1.5). So I wanted to test it for Kannada.
---
I heard that Unicode rending issues of complex scripts are fixed in svn version of Scribus(1.5). So I wanted to test it for Kannada.

Downloaded svn source using following command to my Debian Squeeze machine. 

{% highlight bash %}
svn co svn://scribus.net/trunk/Scribus myscribus
{% endhighlight %}

First installed cmake, which is required to compile Scribus.

{% highlight bash %}
apt-get install cmake
{% endhighlight %}

When I ran `cmake .` as root user, it started listing dependency issues. Installed development libraries as and when cmake throws error. Finally ended up installing following dev libraries.

{% highlight bash %}
apt-get install libtiff4-dev python-dev libfreetype6-dev
                libcups2-dev libxml2-dev liblcms1-dev
                libpixman-1-dev libaspel-dev libfontconfig1-dev
{% endhighlight %}

Now run

{% highlight bash %}
cd myscribus
cmake .
make & make install
{% endhighlight %}  
                    
Compilation took almost an hour in my laptop. :) 

Looks like Scribus still has issues in rendering complex scripts. Will provide more information about rendering issues in my next blog post. 
