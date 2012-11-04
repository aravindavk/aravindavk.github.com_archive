---
title: Using Markdown and SHJS with PHP
tags: [php,markdown,javascript]
layout: post
desc: Markdown is a wiki like syntax standard, to have highly readable content. 
---
In this article we will discuss 

1. Markdown
2. Markdown PHP
3. SHJS - Syntax highlighter using JS
4. How To Use?

  
## Markdown

Markdown is a wiki like syntax standard, to have highly readable content. 

From Markdown website 

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

For example 
    
    # Heading 1
    ## Heading 2
     
    ** Bold **
    * Italic *
     
    > blockquote
     
    `single line code`
     
    Adding inline image
     
    ![Alt Text](a.jpg)
     
    [Link](http://localhost)
   

will be converted to 

{% highlight html %}
<h1>Heading 1</h1>
<h2>Heading 2</h2>

<p><strong> Bold </strong>
<em> Italic </em></p>
<blockquote>
<p>blockquote</p>
</blockquote>
<p><code>single line code</code></p>

<p>Adding inline image</p>
<p><img alt="Alt Text" src="a.jpg" /></p>
<p><a href="http://localhost">Link</a></p>
{% endhighlight %}
    
Click [here](http://daringfireball.net/projects/markdown/) for more details about markdown. 
    
## Markdown PHP
    
PHP implementation of markdown is available [here](http://michelf.com/projects/php-markdown/). We can store the content in database in the markdown format itself, While displaying to user we can convert to HTML using the Markdown PHP library. 

{% highlight php %}
<?php
require_once 'markdown.php';
$text = '
# Heading 1

Sample Paragraph
';

echo Markdown($text);
{% endhighlight %}

Custom style sheets can be applied to required elements like h1, h2, p, blockquote, pre, code etc. This will separate content from html elements and styles, hence content will be highly readable.  

User can use any editors which highlights the markdown syntax(I use Emacs) or any plain text editor.  

## SHJS - Syntax highlighter using JS

It will be good if we able to highlight the code inside pre element, I found a Javascript utility SHJS(Syntax Highlighter with JavaScript), which has very good features and multiple themes support. Read the documentation about SHJS [here](http://shjs.sourceforge.net/). 

SHJS library requires class to be defined in pre tag like `<pre class="sh_php">` for PHP code, but it is not possible to add class in markdown syntax, so we will write an PHP function to add the class to each pre element. We need to add `#!sh_php`(php is used as example, that will change depending on the language) in the markdown text whereever highlighting is required. 

{% highlight php %}
#!sh_php
<?php
# This is an example text file to show how to add language 
# header for syntax highlight
echo 'Hello World';
{% endhighlight %}

PHP function to replace `#!sh_php` to `<pre class="sh_php">` is     

{% highlight php %}
<?php
function addClassToPre($text){
    // Add respective class to pre tag
    $op = preg_replace('/<pre><code>#!([^\\n]+)/',
                       '<pre class=\'$1\'><code>',
                       $text);    
    return $op;
}
{% endhighlight %}

If we load all the syntax highlight JavaScript files then it affects loading time, so we will add only required JavaScript files for syntax highlight based on the languages used in the content. 

{% highlight php %}
<?php
function addRespectiveJsFiles($text){
    preg_match_all('/<pre><code>#!([^\\n]+)/',Markdown($text), $result);
    $jsFiles = array_unique($result[0]);

    foreach($jsFiles as $jsFile){
        $fileName = str_replace('<pre><code>#!','',$jsFile). '.js';
        if(file_exists('lang/'.$fileName)){
            echo '<script type="text/javascript" src="lang/'.$fileName .'"></script>';
        }
    }
}
{% endhighlight %}

## How To Use? 

{% highlight php %}
<script type="text/javascript" src="sh_main.js"></script>
<link type="text/css" rel="stylesheet" href="style.css"> 
<link type="text/css" rel="stylesheet" href="css/sh_emacs.css">

<?php
require_once 'markdown.php';

# Get File content which has text in markdown format
$rawContent = file_get_contents("sample.txt");

# Add the respective language files
addRespectiveJsFiles($rawContent);

echo codeHighlight(markdown($rawContent));
?>
<script>
window.onload = function(){
sh_highlightDocument();
};
</script>
{% endhighlight %}

Btw, I use SHJS emacs theme for syntax highlight in my website :)

