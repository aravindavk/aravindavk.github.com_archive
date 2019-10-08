#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *


SITEURL = "http://aravindavk.in"
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/category-{slug}.atom.xml'
TAG_FEED_ATOM = 'feeds/tag-{slug}.atom.xml'

# Blogroll
SOCIAL_LINKS = (
    ('News', "%s/%s" % (SITEURL, FEED_ALL_ATOM), 'feed.png'),
    ('Twitter', 'http://twitter.com/aravindavk', 'twitter.png'),
    ('Google Plus', 'https://plus.google.com/+aravindavk', 'gplus.png'),
    ('Github', 'https://github.com/aravindavk', 'github.png'),
    ('Flickr', 'http://www.flickr.com/photos/aravindavk', 'flickr.png'),
    ('LinkedIn', 'http://in.linkedin.com/in/aravindavk', 'linkedin.png'),)

TAGS_FOR_FEED = ["kannadablog", "glusterfsblog"]

DELETE_OUTPUT_DIRECTORY = True
TWITTER_USERNAME = "aravindavk"

DISQUS_SITENAME = "vkaravinda"
GOOGLE_ANALYTICS = "UA-11830111-1"
