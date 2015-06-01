Developing Pebble Timeline Application - Webmon
###############################################

:slug: developing-pebble-timeline-app-webmon
:author: Aravinda VK
:date: 2015-06-02
:tags: pebble
:summary: I created a Pebble Timeline application to monitor the status of websites called Webmon

Pebble firmware 3.0 introduced a new feature called `Timeline <https://developer.getpebble.com/guides/timeline/>`__, the advantage of Timeline app is that processing happens in App server instead of in the Mobile / Watch, and can directly send notification to Watch (via the Timeline API website and phone, but no additional app required on the phone).

I created a Pebble Timeline application to monitor the status of websites called `Webmon <https://apps.getpebble.com/en_US/application/554627a6ab49e41f8f00004b>`__. Sometimes friends/users will ping or email to inform that our website is not accessible for some reason. We may lose our business if we don't monitor them regularly.

.. image:: /images/webmon_logo.png
   :alt: Webmon App Logo

I submitted this app as part of `#timelinechallenge <https://developer.getpebble.com/blog/2015/04/14/the-timeline-challenge-is-live/>`__, but the app was not fully working that time and had issues with sending user Pins. I am not sure Pebble team looked at this app or not. :) And now most of the issues got resolved.

There are other possibilities similar to this app, for example

1. User can register a stock with min and max values, A cron can run every 5-15 mins in the app server. If stock price crosses the user configured limit, then send Timeline notification to user.
2. User can configure his/her blood group and location, A daemon in app server can run listening to various APIs like `@tweet4blood <https://twitter.com/tweet4blood>`__, if any matching request, send notification to Pebble user with blood request. The user can respond Yes/No(Anytime user can unsubscribe to the service)

This application is written using Python (with Postgresql database) and hosted on `Red Hat OpenShift <https://www.openshift.com/>`__ cloud platform. (Free account as of now). Number of tracking URLs per user is limited as of now, but based on the feedbacks/usage I will enhance it to track multiple websites.

When I published the app link on `reddit <http://www.reddit.com/r/pebble/comments/34sb31/webmon_website_health_monitor_timeline_app/>`__, `spangborn <http://www.reddit.com/user/spangborn>`__ was very concerned about the security issues and chances of app server getting blocked by domain owners. He raised some valid concerns, I am planning to address some of those comments soon.

Timeline APIs are good, **but I feel insecure when it is allowed to push the User pins without using APP_KEY**. If a user_token is exposed then anybody can send timeline messages and spam that user.

Pebble watch app "webmon" is simple, just displays a banner page to guide the user to configure the app in app config.

.. figure:: /images/webmon_watchapp.png
   :alt: Screenshot of Watchapp

In configure window, enter the website URL you want to track and click SAVE. You can anytime disable/enable the website tracking. When configuration is set, it sends registration request to the app server to register a website for tracking using PebbleKit JS.

.. figure:: /images/webmon_config.png
   :alt: Configuration page

A cron job runs on app server every one hour, gets the unique list of websites and does an HTTP GET request. If any website's state is different from previous state, then it prepares a Timeline notification and sends it. The app will not spam by sending too many messages, it only notifies the user if the state changed after previous run.

.. image:: /images/webmon_healthy.png
   :alt: Healthy Notification
.. image:: /images/webmon_faulty.png
   :alt: Faulty Notification

Sending user pin is super easy with Python, I used Python library `requests <https://pypi.python.org/pypi/requests>`__

.. code-block:: python

    import requests
    pin = {..} # Valid Pin object
    url = "https://timeline-api.getpebble.com/v1/user/pins/%s" % pin["id"]
    resp = requests.put(url,
                        headers={"X-User-Token": user_token,
                                 "Content-Type": "application/json"},
                        data=json.dumps(pin))
    print resp.status_code

Technologies used:
------------------
1. Pebblekit JS, Pebble SDK 3
2. Python (flask, requests, sqlalchemy)
3. Postgresql database
4. Cron

Problems faced:
---------------
Without having actual device, testing app is very very difficult to test the Timeline apps. I developed app using installed SDK, but for testing Timeline I copied all code to `cloudpebble.net <https://cloudpebble.net/>`__

Show me the Code:
-----------------
I love Open Source and sharing code makes me happy. Code is available in `github.com/aravindavk/webmon <https://github.com/aravindavk/webmon>`__ with MIT license.

\***

Comments and Sugesstions welcome.
