---
title: Sorted Bar charts using AngularJS
tags: [javascript, angularjs,angular]
layout: post
desc: "Creating bar charts/progress bars using HTML and CSS is very easy, we can create it using two DIV tags. Following image shows outer div in gray color and inner div in green color. Width of inner div can be set dynamically based on the required value."
---
Creating bar charts/progress bars using HTML and CSS is very easy, we can create it using two DIV tags. Following image shows outer div in gray color and inner div in green color. Width of inner div can be set dynamically based on the required value.

<div class="sep clear"></div>

<span style="color:#555;font-size:14px;">42%</span><div style="width:100%;background-color:#ddd;height:5px;"><div style="height:5px;background-color:green;width:42%"></div></div>

<div class="sep clear"></div>

{% highlight html %}
<style>
.outer{width:100%; background-color:#ddd; height:5px;}
.inner{width:42%; background-color:green; height:5px;}
.chart-label{color:#555; font-size:12px;}
</style>
<span class="chart-label">42%</span>
<div class="outer">
    <div class="inner"></div>
</div>
{% endhighlight %}

Today I tried to create sorted bar charts using Angular JS. Following chart shows number of blog posts I wrote each year. We can change the sort order by clicking the yellow buttons. The [demo](/demo/sorted-bar-charts-using-angularjs/) code is available [here](https://github.com/aravindavk/demo/tree/master/sorted-bar-charts-using-angularjs). 

<iframe src="/demo/sorted-bar-charts-using-angularjs/" width="660" height="400"></iframe>

I was trying to write a blog post every tuesday and celebrate as #blogTuesday. The chart shows how far I succeeded. :)

<blockquote class="twitter-tweet"><p>52 weeks per year, 52 Tuesdays, 52 blog posts? <a href="https://twitter.com/search/%23blogTuesday">#blogTuesday</a></p>&mdash; Aravinda (@aravindavk) <a href="https://twitter.com/aravindavk/status/308613618793070593">March 4, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
