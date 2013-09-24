---
title: GlusterFS Tools
tags: [glusterfs,tools]
layout: post
desc: "A wrapper around GlusterFS CLI tool"
---
<div class="notice-update">
UPDATE: <br/>Installation and usage is simplified with the new release of glusterfs-tools, refer <a href="http://aravindavk.in/blog/glusterdf-df-for-gluster-volumes/">this blog</a> for more details.
</div>

From [GlusterFS website](http://gluster.org)
> GlusterFS is an open source, distributed file system capable of scaling to several petabytes (actually, 72 brontobytes!) and handling thousands of clients. GlusterFS clusters together storage building blocks over Infiniband RDMA or TCP/IP interconnect, aggregating disk and memory resources and managing data in a single global namespace. GlusterFS is based on a stackable user space design and can deliver exceptional performance for diverse workloads.

Gluster CLI has limited features to view and filter the volume info. I started a small project to enhance Gluster CLI for personal use. As of now it consists of a tool to list Gluster volumes in tabular format. Other intersesting features includes filtering the output based on name, type, status, bricks etc. 

Clone the project(I cloned it to `/home/aravinda/sandbox/`)

{% highlight bash %}
cd /home/aravinda/sandbox
git clone https://github.com/aravindavk/glusterfs-tools.git
{% endhighlight %}

Create a shellscript to call gftools /usr/local/bin/gfvolumes

{% highlight bash %}
#!/bin/bash
python /home/aravinda/sandbox/glusterfs-tools/gftools/volumes.py "$@"
{% endhighlight %}

Make gfvolumes executable

{% highlight bash %}
chmod +x /usr/local/bin/gfvolumes
{% endhighlight %}

Now we can run `sudo gfvolumes` to see the list of glusterfs volumes. Type `gfvolumes --help` for help.

![All Volumes](/photo/glusterfs/all_volumes.png)
<span class="imgCaption">All Volumes</span>

<div class="sep clear"></div>
<div class="sep clear"></div>

![Name Filter](/photo/glusterfs/name_filter.png)
<span class="imgCaption">Name Filter</span>

<div class="sep clear"></div>
<div class="sep clear"></div>

![Status Filter](/photo/glusterfs/status_filter.png)
<span class="imgCaption">Status Filter</span>

<div class="sep clear"></div>
<div class="sep clear"></div>

![Type Filter](/photo/glusterfs/type_filter.png)
<span class="imgCaption">Type Filter</span>

<div class="sep clear"></div>
<div class="sep clear"></div>

![Name Filter](/photo/glusterfs/show_bricks.png)
<span class="imgCaption">Show Bricks</span>

<div class="sep clear"></div>
<div class="sep clear"></div>

Additionally it can output filtered details in JSON format. 

![Name Filter](/photo/glusterfs/json_format.png)
<span class="imgCaption">JSON Format</span>

<div class="sep clear"></div>
<div class="sep clear"></div>

We can easily import this in our python script. 

{% highlight python %}
#!/usr/bin/python
from gftools import volumes
gfvols = volumes.GfVolumes()    
ok, vols = gfvols.get(name='^gv[0-9]$', status='down') # Various filters available
if ok:
    # Do action
{% endhighlight %}

**Note:** root permission is required to run gluster command, so run gfvolumes as root(`sudo gfvolumes`)

## Future plans:

1. Adding more filters
2. Adding more admin tools
3. Creating RPM/DEB packages

<div class="sep clear"></div>
<div class="sep clear"></div>

C & S Welcome.

