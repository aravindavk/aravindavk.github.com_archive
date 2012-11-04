---
title: Question on CouchDB View
tags: [couchdb, views]
layout: post
desc: In my CouchDB application, blog/photo is identified by the type field in the document. 
---
In my CouchDB application, blog/photo is identified by the type field in the document. 

{% highlight javascript %}
{
    "type": "blog",
    "title": "First Blog",
    "when_created": "01/20/2011 15:30:00",
    ...
}

{
    "type": "photo",
    "title": "First Photo",
    "when_created": "01/21/2011 15:30:00",
    ...
}
{% endhighlight %}

To get the latest content, I created a view with map function as below. 

{% highlight javascript %}
// View name: latest
function (doc){
    if (doc.type == "blog" || doc.type == "photo") {
        emit(doc.when_created, null);
    }
}
{% endhighlight %}

Now I can sort the view by when_created field. 

Similarly I created two other views for latest blogs and latest photos as below. 

{% highlight javascript %}
// View name: latestblogs
function (doc){
    if (doc.type == "blog") {
        emit(doc.when_created, null);
    }
}
{% endhighlight %}
.

{% highlight javascript %}
// View name: latestphotos
function (doc){
    if (doc.type == "photo") {
        emit(doc.when_created, null);
    }
}
{% endhighlight %}

But the view "latest" will have duplicate data, It contains the data which is already available in "latestblogs" and "latestphotos" views. 

So I planned to create a single view function with complex key as below. 

{% highlight javascript %}
// View name: latest2
function (doc){
    if (doc.type == "blog" || doc.type == "photo") {
        emit([doc.type, doc.when_created], null);
    }
}
{% endhighlight %}

Now I can get list of new blogs/photos by adding startkey and endkey to the view as below

{% highlight javascript %}
// List of new blogs:
startkey=["blog", {}] endkey=["blog"] descending=true

// List of new blogs:
startkey=["photo", {}] endkey=["photo"] descending=true
{% endhighlight %}

To get all the records irrespective of type, call the view without startkey and endkey parameters. But the issue is all are sorted by first element of key not by when_created. 

How can I get latest 10 elements irrespective of doc.type. (sorted based on second element of key)




