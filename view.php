---
layout: nil
permalink: /view/index.php
---
<?php

$url = isset($_GET['page']) ? $_GET['page'] : '';
$url = preg_replace("/\/$/", "", $url);

if ($url != "") {
    echo "Blog URL has changed from <span style=\"color:#555;font-size:12px;\">http://aravindavk.in/view/$url</span> ".
        "to <span style=\"color:#555;font-size:12px;\">http://aravindavk.in/blog/$url</span>. Click <a href=\"http://aravindavk.in/blog/$url\">here</a>";
}
else {
    echo "Archive page URL has changed. Click <a href=\"http://aravindavk.in/archive\">here</a>";
}

