---
title: glusterdf - df for gluster volumes
tags: [glusterfs,tools]
layout: post
desc: "A CLI utility to check the disk usage of glusterfs volumes"
---
A CLI utility to check the disk usage of [glusterfs](http://gluster.org/) volumes. Using `df` command we can view the disk usage of only mounted glusterfs volumes. This utility takes care of mounting gluster volumes available in the machine where this command is executed. glusterdf uses [libgfapi](https://github.com/gluster/glusterfs/tree/master/api) provided by glusterfs to fetch the statvfs information.

Installation is very simple,

{% highlight bash %}
git clone git@github.com:aravindavk/glusterfs-tools.git
cd glusterfs-tools
sudo python setup.py install
{% endhighlight %}

You can also clone this project from [forge.gluster.org/glusterfs-tools](https://forge.gluster.org/glusterfs-tools)

Once installed, two tools will be available `glustervolumes` and `glusterdf`.

`sudo glusterdf --help` to know more about options available. (same for glustervolumes `sudo glustervolumes --help`)

Usage examples:

<div class="imgCaption">sudo glusterdf -h (Disk usage in human readable format)</div>
![glusterdf -h](/photo/glusterfs/glusterdf_h.png)

<div class="sep clear"></div>
<div class="sep clear"></div>

<div class="imgCaption">sudo glusterdf -i (View inodes usage information)</div>
![glusterdf -i](/photo/glusterfs/glusterdf_i.png)

<div class="sep clear"></div>
<div class="sep clear"></div>

<div class="imgCaption">sudo glusterdf --status up --type repl -h (View all running replicated volumes)</div>
![sudo glusterdf --status up --type repl -h](/photo/glusterfs/glusterdf_status_type_h.png)

<div class="sep clear"></div>
<div class="sep clear"></div>

<div class="imgCaption">sudo glusterdf -h --volumewithbrick "/b[12]"</div>
![sudo glusterdf -h --volumewithbrick "/b[12]"](/photo/glusterfs/glusterdf_volumewithbrick.png)

<div class="sep clear"></div>
<div class="sep clear"></div>

<div class="imgCaption">sudo glusterdf --status up --type repli -h --json | python -m json.tool</div>
![sudo glusterdf --status up --type repli -h --json | python -m json.tool](/photo/glusterfs/glusterdf_json.png)

<div class="sep clear"></div>
<div class="sep clear"></div>

<div class="imgCaption">sudo glusterdf --help</div>
![glusterdf --help](/photo/glusterfs/glusterdf-help.png)

<div class="sep clear"></div>
<div class="sep clear"></div>

In my previous blog([this](http://aravindavk.in/blog/glusterfs-tools/)) I wrote about gfvolumes(now it is `glustervolumes`). glusterfs-tools is rewritten as python library which can be used with your Python programs.

For example 

{% highlight python %}
from glusterfstools import volumes, gfapi
# Get all volumes
vols = volumes.get()
# Get a specific volume information
vol = volumes.get(name="gv1")
# Search volumes by status
down_volumes = volumes.search({"status": "down"})
# Search volumes by type
distribute_volumes = volumes.search({"type": "distribute"})
# Statvfs information
vol_statvfs = gfapi.statvfs("gv1")
# To view information about gluster volumes which are down
# and having bricks like "/gfs"
vols = volumes.search({"status": "down", "volumewithbricks": "/gfs"})
# To view filters available
print (volumes.filters())

{% endhighlight %}

volumes.search accepts filters as parameter, extending volume filters is very simple. For example name filter looks like this([src/glusterfstools/volumefilters.py](https://github.com/aravindavk/glusterfs-tools/blob/master/src/glusterfstools/volumefilters.py))

{% highlight python %}
@filter("name")
def name_filter(vols, value):
    def is_match(vol, value):
        if value in ['', 'all'] or \
            vol["name"].lower() == value.lower().strip() or \
            re.search(value, vol["name"]):
            return True
        else:
            return False

    return [v for v in vols if is_match(v, value)]
{% endhighlight %}

The filter can be used as below

{% highlight python %}
from glusterfstools import volumes

# Filters the volumes with name either gv1 or gv2
filters = {"name": "gv[12]"}
print volumes.search(filters)

{% endhighlight %}
