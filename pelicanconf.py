#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Aravinda VK'
SITENAME = u'Aravinda VK'
SITEURL = ''

TIMEZONE = 'Asia/Kolkata'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
SITEURL = "http://localhost:8000"
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None

TRANSLATION_FEED_ATOM = None

# Blogroll
SOCIAL_LINKS = (
    ('News', "%s/%s" % (SITEURL, FEED_ALL_ATOM), 'feed.png'),
    ('Twitter', 'http://twitter.com/aravindavk', 'twitter.png'),
    ('Google Plus', 'https://plus.google.com/+aravindavk', 'gplus.png'),
    ('Github', 'https://github.com/aravindavk', 'github.png'),
    ('Flickr', 'http://www.flickr.com/photos/aravindavk', 'flickr.png'),
    ('LinkedIn', 'http://in.linkedin.com/in/aravindavk', 'linkedin.png'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# THEME = "/home/aravinda/pelican-theme-aravindavk-dot-in"

ARTICLE_PATHS = ["blogs"]
ARTICLE_URL = 'blog/{slug}/'
ARTICLE_SAVE_AS = 'blog/{slug}/index.html'

PAGE_PATHS = ["pages"]
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

CATEGORY_URL = 'category/{slug}/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'

# TAG_URL = 'tag/{slug}/'
# TAG_SAVE_AS = 'tag/{slug}/index.html'

STATIC_PATHS = ['extras/CNAME',
                'images',
                'files',
                'ascii2unicode',
                'diesel-vs-petrol-car',
                'lucia-preorder',
                'demo',
                'madve',
                'talkies']

EXTRA_PATH_METADATA = {
    'extras/CNAME': {'path': 'CNAME'},
}

DIRECT_TEMPLATES = ('index', 'tags', 'categories', 'blogs',)

BLOGS_SAVE_AS = 'blogs/index.html'
# TAGS_SAVE_AS = 'tags/index.html'

NO_BROWSER_CACHE = True
