---
title: PHP Short open tag and Alternate syntax
tags: [php, shortcut]
layout: post
desc: short_open_tag is disabled by default in PHP 5.3
---
Many PHP programmers use short open tag `<?` instead of `<?php`. It saves time(really?) in coding especially while using PHP code in between HTML. But the use of short open tag is discouraged because it conflicts with XML and other languages. In the following example PHP interpreter fail to decide which is PHP and which is not, it tries to execute/interpret XML as PHP script and gives error.

{% highlight php %}
<?xml version="1.0"?>
<? $fav_languages = Array("PHP", "Python"); ?>
<scripting>
    <? foreach($fav_languages as $fav): ?>
        <lang><?= $fav; ?></lang>
    <? endforeach; ?>
</scripting>
{% endhighlight %}

**Note**: foreach loop in above example uses PHP's alternate syntax for foreach loop. You can read more about alternate syntax [here](http://php.net/manual/en/control-structures.alternative-syntax.php).

If short_open_tag is disabled in ini file, then modify the above script by adding `<?php` instead of `<?` and `<?php echo ` instead of `<?=`, then it will run successfully without any issues.

{% highlight php %}
<?xml version="1.0"?>
<?php $fav_languages = Array("PHP", "Python"); ?>
<scripting>
    <?php foreach($fav_languages as $fav): ?>
        <lang><?php echo $fav; ?></lang>
    <?php endforeach; ?>
</scripting>
{% endhighlight %}

short_open_tag setting is disabled by default in PHP 5.3 onwards, so if we enable this flag then we should be careful while dealing with XML data. Following example helps to write XML even if short_open_tag is enabled. 

{% highlight php %}
<?= '<?xml version="1.0"?>'; ?>
<? $fav_languages = Array("PHP", "Python"); ?>
<scripting>
    <? foreach($fav_languages as $fav): ?>
        <lang><?= $fav; ?></lang>
    <? endforeach; ?>
</scripting>
{% endhighlight %}

The shortcut `<?=` is very useful and no conflicts between other markups. Good news is that from PHP 5.4 onwards `<?=` is always available irrespective of the short_open_tag settings.

Following example shows the use of this shortcut and PHP alternate syntax for control statements. Be careful and check your server configuration before deploying PHP code, your PHP code will be displayed as is without interpreting if this flag is not enabled. 

{% highlight php %}
<?php $menus = Array("Home" => "/", "Blog" => "/blog", "About" => "/about"); ?>
<ul id="menu">
    <?php foreach($menus as $menu=>$url): ?>
        <li><a href="<?= $url; ?>"><?= $menu; ?></a></li>
    <?php endforeach; ?>
</ul>
{% endhighlight %}

<div class="clear sep"></div>

**References:**

1. [PHP short_open_tag](http://www.php.net/manual/en/ini.core.php#ini.short-open-tag)
2. [Alternative syntax for control structures](http://php.net/manual/en/control-structures.alternative-syntax.php)
