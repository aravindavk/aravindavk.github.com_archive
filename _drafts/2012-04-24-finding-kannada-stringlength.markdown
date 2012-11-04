---
title: Finding Kannada String Length
tags: [kannada, javascript]
layout: post
desc: Single Kannada letter is formed by one or more characters, so when we calculate Unicode string length then it will give wrong results.
---
One day my friend asked how to calculate actual string length of Kannada text. Single Kannada letter is formed by one or more characters, so when we calculate Unicode string length then it will give wrong results. For example string length of "ಕಾ" is 2 as per the Unicode standards, because "ಕಾ" is formed by joining "ಕ" and "ಾ". But as per Kannada language concerned string length of "ಕಾ" should return 1.

![Examples](/photo/str_len_kannada.png)

Created a function in JavaScript which calculates actual string length for Kannada text. The source code is released under MIT license and is available here. 

Once this script included in your HTML page, a new method to String(`length_kn`) will be available. Example Usage:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta >
    <script type="text/javascript" src="length_kn.js"></script>
  </head>
  <body>
    <script type="text/javascript">
    console.log("As per Unicode: ", "ತಿಮ್ಮಿ".length;
    console.log("New logic: ", "ತಿಮ್ಮಿ".length_kn());
    </script>
  </body>
</html>
{% endhighlight %}

Let me know if you find this useful. 
