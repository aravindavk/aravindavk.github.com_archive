---
layout: default
title: Personal Home page of Aravinda
permalink: /blog/index.html
---
<table class="blogs-list">
  {% for post in site.posts %}
  <tr>
    <td class="c1"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }} </a></td>
    <td class="c2">{{ post.date | date: "%d %b, %Y" }}</td>
  </tr>
  {% endfor %}
</table>
<script type="text/javascript">
  var PAGE = "blogs";
</script>
