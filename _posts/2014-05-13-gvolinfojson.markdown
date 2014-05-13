---
title: gvolinfojson - A utility to convert xml output of gluster volume info to json
tags: [glusterfs,tools]
layout: post
desc: "A utility to convert xml output of gluster volume info to json."
---
Today I wrote a small utility using [golang](http://golang.org/) to convert xml output of command `gluster volume info` to json.

Download the binary from [here](https://github.com/aravindavk/gvolinfojson/releases/download/1.0/gvolinfojson) and copy to /usr/local/bin directory(or any other directory, which is available in PATH).

    wget https://github.com/aravindavk/gvolinfojson/releases/download/1.0/gvolinfojson
    sudo cp gvolinfojson /usr/local/bin/
    sudo chmod +x /usr/local/bin/gvolinfojson

Or

If you have golang installed(make sure `$GOPATH/bin` is available in PATH), then

    go get github.com/aravindavk/gvolinfojson

To use it with gluster volume info command,

    sudo gluster volume info --xml | gvolinfojson

Thats it, you will get the json output of volume info command. If you need pretty json output then

    sudo gluster volume info --xml | gvolinfojson --pretty

Source code is available [here](https://github.com/aravindavk/gvolinfojson).

C & S Welcome.
