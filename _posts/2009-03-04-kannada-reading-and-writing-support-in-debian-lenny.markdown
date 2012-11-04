---
title: Kannada Reading and Writing support in Debian Lenny
tags: [kannada, gnu-linux, debian]
layout: post
desc: Now it is very easy to enable and configure Kannada in Debian. Install the following packages using apt-get or synaptic package manager. 
---
Now it is very easy to enable and configure Kannada in Debian. Install the following packages using apt-get or synaptic package manager. 

If you are a GNOME user then 

{% highlight bash %}
apt-get install ttf-kannada-fonts scim-bridge-client-gtk scim-m17n
{% endhighlight %}

If You are KDE 4.x user then 

{% highlight bash %}
apt-get install ttf-kannada-fonts scim-bridge-client-qt4 scim-m17n
{% endhighlight %}

Create a folder in your home directory with name ".xinput.d" and create a file "all\_ALL" inside the folder created just now.

{% highlight bash %}
mkdir $HOME/.xinput.d
gedit $HOME/.xinput.d/all_ALL
{% endhighlight %}

Copy below lines in the file all_ALL. 

{% highlight bash %}
#file: all_ALL
XIM=SCIM
if [ -e /usr/bin/skim ]; then
    XIM_PROGRAM=" "
else
    XIM_PROGRAM=/usr/bin/scim
fi
XIM_ARGS="-d"
if [ -e /usr/lib/gtk-2.0/*/immodules/im-scim-bridge.so ]; then
    GTK_IM_MODULE=scim-bridge
else
    GTK_IM_MODULE=xim
fi
if [ -e /usr/lib/qt3/plugins/inputmethods/im-scim-bridge.so -o \
     -e /usr/lib/qt4/plugins/inputmethods/im-scim-bridge.so ]
then
    QT_IM_MODULE=scim-bridge
else
    QT_IM_MODULE=xim
fi

DEPENDS="scim | skim, scim-bridge-agent, scim-bridge-client-gtk | \
         scim-bridge-client-qt | scim-bridge-client-qt4"
{% endhighlight %}

(The above xinput script is shared by [Ravi](http://linmaya.net)

Save the file and logoff. When you login to your system you will see small keyboard icon in the panel, that means all installations and configurations are successful. 

##### How to use SCIM

Open gedit or any other text editor, click on the small keyboard icon in panel and select the required keyboard layout. Now we can use Cntrl + Space to toggle Kannada(Previously selected layout) and English. We can even create the folders/files with kannada name  :)

Enjoy! 

