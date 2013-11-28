---
title: Effective GlusterFs monitoring using hooks
tags: [glusterfs]
layout: post
desc: "Let us imagine we have a GlusterFs monitoring system which displays list of volumes and its state, to show the realtime status, monitoring app need to query the GlusterFs in regular interval to check volume status, new volumes etc. Assume if the polling interval is 5 seconds then monitoring app has to run \"gluster volume info command\" ~17000 times a day!"
---
Let us imagine we have a GlusterFs monitoring system which displays list of volumes and its state, to show the realtime status, monitoring app need to query the GlusterFs in regular interval to check volume status, new volumes etc. Assume if the polling interval is 5 seconds then monitoring app has to run `gluster volume info` command ~17000 times a day!

How about maintaining a state file in each node? which gets updated after every new GlusterFs event(create, delete, start, stop etc).

In this blog post I am trying to explain the possibility of creating state file and using it.

As of today GlusterFs provides following hooks, which we can use to update our state file.

    create
    delete
    start
    stop
    add-brick
    remove-brick
    set

<div class="sep"></div>
<div class="sep"></div>

# How to use hooks

GlusterFs hooks present in `/var/lib/glusterd/hooks/1` directory. Following example shows sending message to all users using `wall` command when any new GlusterFs volume is created.

Create a shell script `/var/lib/glusterd/hooks/1/create/post/SNotify.bash` and make it executable. Whenever a volume is created GlusterFs executes all the executable scripts present in respective hook directory(Glusterfs executes only the scripts which filename starting with 'S')

{% highlight bash %}
#!/bin/bash
VOL=
ARGS=$(getopt -l "volname:"  -name "" $@)
eval set -- "$ARGS"
while true; do
    case $1 in
        --volname)
            shift
            VOL=$1
            ;;
        *)
            shift
            break
            ;;
    esac
    shift
done

wall "Gluster Volume Created: $VOL";
{% endhighlight %}

<div class="sep"></div>
<div class="sep"></div>

## Experimental project - GlusterWeb

This experimental project maintains a sqlite database `/var/lib/glusterd/nodestate/glusternodestate.db` which gets updated after any GlusterFs event. For example if a GlusterFs volume is created then it updates volumes table and also bricks table.

This project depends on [glusterfs-tools](https://github.com/aravindavk/glusterfs-tools) so install both projects.

{% highlight bash %}
git clone https://github.com/aravindavk/glusterfs-tools.git
cd glusterfs-tools
sudo python setup.py install

git clone https://github.com/aravindavk/glusterfs-web.git
cd glusterfs-web
sudo python setup.py install
{% endhighlight %}

By running `setup`, this tool will install all the hooks which are required for monitoring. (`cleanup` is for removing all the hooks)

{% highlight bash %}
sudo glusternodestate setup
{% endhighlight %}

All set! now run `glusterweb` to start webapp.

{% highlight bash %}
sudo glusterweb
{% endhighlight %}

Web application starts running in `http://localhost:8080` you can change the port using `--port` or `-p` option. 

{% highlight bash %}
sudo glusterweb -p 9000
{% endhighlight %}

![GlusterWeb](/photo/glusterweb-v0.1.png)
<span class="imgCaption">Initial version of web interface.</span>

<div class="sep"></div>

## Future plans

**Authentication**: Option to provide username and password or access key while running glusterweb, For example

{% highlight bash %}
sudo glusterweb --username aravindavk --password somesecret
# or
sudo glusterweb --key secretonlyiknow
{% endhighlight %}

**More gluster hooks support:** we need more GlusterFs hooks for better monitoring(refer Problems below)

**More GlusterFs features support:** As a experiment UI only lists volumes, we need improved UI and support for different gluster features.

**Actions support:** Support for volume creation, adding/removing bricks etc.

**REST api and SDK:** Providing REST api for gluster operations.

**Many more:** Not yet planned :)

<div class="sep"></div>
<div class="sep"></div>

## Problems

**State file consistency:** If glusterd goes down in the node then the database will have wrong details about node's state. One workaround is to reset the database if glusterd is down using a cron job, when glusterd comes up, database will not gets updated and the database will have previous updated details. To prevent this we need a glusterfs hook for `glusterd-start`.

**More hooks:** As of today we don't have hooks for volume down/up, brick down/up and other events. We need following hooks for effective monitoring glusterfs.(Add more if anything missing in the list)

    glusterd-start
    peer probe
    peer detach
    volume-down
    volume-up
    brick-up
    brick-down


Let me know your thoughts! Thanks.
