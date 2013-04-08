---
title: SMS trend analysis - Android
tags: [english, sms, android, sql]
layout: post
desc: "Now a days my incoming and outgoing SMS trend looks like this for some reason :)"
---
Now a days my incoming and outgoing SMS trend looks like this for some(known) reason :)

![Incoming sms trend](/photo/incoming_sms_trend.png)
<span class="imgCaption">Incoming SMS trend(Nov 2012 - Apr 2013)</span>
<div class="sep clear"></div>
![Outgoing sms trend](/photo/outgoing_sms_trend.png)
<span class="imgCaption">Outgoing SMS trend(Nov 2012 - Apr 2013)</span>

**PS**: Sometimes I delete telemarketing SMS as and when I receive, so incoming trend may not show actual :) Also while playing with Android OS I lost all the SMS prior to Nov 2012.

<div class="sep clear"></div>
<div style="color:#777;text-align:center">* * * *</div>
<div class="sep clear"></div>
Continue reading if you are wondering how I extracted the SMS data from the phone.

<div class="sep clear"></div>
**prerequisites**:

0. Android phone
1. Your Android phone should be rooted one.
2. Android SDK should be installed.
3. Debugging should be enabled in your android phone.

<div class="sep clear"></div>
<div class="sep clear"></div>
**Idea**:

In Android, SMS data is stored in sqlite database, and it is located in the following directory(in phone).

{% highlight bash %}
/data/data/com.android.providers.telephony/databases/mmssms.db
{% endhighlight %}

So we can run sql queries to get the details from sms table as per our need. To access the data from db, Android phone should be rooted. 

Add `adb` path(in my machine adb path is `/home/aravinda/android-sdk/platform-tools/`) to environment variable PATH, and run `adb` as root. 

{% highlight bash %}
adb root
{% endhighlight %}

In sqlite we can see the list of tables present in a database using `.tables`(`sqlite3 <db path> ".tables"`) query.

{% highlight bash %}
adb shell 'sqlite3 /data/data/com.android.providers.telephony/databases/mmssms.db ".tables"'
{% endhighlight %}

and we can get schema of the required sqlite table using `.schema <table name>` query.

{% highlight bash %}
adb shell 'sqlite3 /data/data/com.android.providers.telephony/databases/mmssms.db ".schema sms"'
{% endhighlight %}

{% highlight sql %}
CREATE TABLE sms
(
    _id                INTEGER PRIMARY KEY,
    thread_id          INTEGER,
    address            TEXT,
    person             INTEGER,
    date               INTEGER,
    date_sent          INTEGER DEFAULT 0,
    protocol           INTEGER,
    read               INTEGER DEFAULT 0,
    status             INTEGER DEFAULT -1,
    type               INTEGER,
    reply_path_present INTEGER,
    subject            TEXT,
    body               TEXT,
    service_center     TEXT,
    locked             INTEGER DEFAULT 0,
    error_code         INTEGER DEFAULT 0,
    seen               INTEGER DEFAULT 0
);
{% endhighlight %}

Now we know how to run queries inside phone using `adb`, let us list down some of the ideas which we can implement using available sms data. 

1. Number of SMS sent/received per day, to see the trend or if you have number of SMS limit per day/month.
2. SMS sent/received trend per hour, to see what time of the day I spend more in sending/receiving SMS.
3. Number of SMS per day per number, to see the trend per number.
4. Identify the messages/number to which I never interacted.
5. Identify the trend of teledirect numbers(Regex for non number phone number).
6. Backup all SMS database.
7. SMS book/conversations book.
8. Check how many sent messages are just less than 10 chars.
9. Live SMS notification in Laptop/Computer.

<div class="sep clear"></div>
**The only limitation is your imagination :D**

<div class="sep clear"></div>
**Example**: Number of sms sent per day.

Query is
{% highlight sql %}
SELECT STRFTIME("%Y%m%d", DATETIME(date/1000, "unixepoch", "localtime")) dte,
       COUNT(_id)
FROM sms
WHERE type = 2
GROUP BY dte
ORDER BY dte
{% endhighlight %}
where type 2 is sent and 1 is received.

{% highlight bash %}
adb shell 'sqlite3 /data/data/com.android.providers.telephony/databases/mmssms.db \
"SELECT STRFTIME(\"%Y%m%d\", DATETIME(date/1000, \"unixepoch\", \"localtime\")) dte,  \
COUNT(_id) FROM sms WHERE type = 2 GROUP BY dte ORDER BY dte"'
{% endhighlight %}

If you want to find number of sms sent per day for a particular phone number then add the condition in WHERE clause as follows
{% highlight sql %}
SELECT STRFTIME("%Y%m%d", DATETIME(date/1000, "unixepoch", "localtime")) dte,
       COUNT(_id)
FROM sms
WHERE type = 2
GROUP BY dte
ORDER BY dte
AND REPLACE(REPLACE(address, "+91",""), " ", "") = "XXXXX"
{% endhighlight %}

I created [Python script](https://gist.github.com/aravindavk/5339192) to extract data as described above. Additionally script generates csv output which can be used to plot as required. Use any familiar library(Matplotlib, PhantomJS and d3, flot etc..) or just use Spreadsheet to plot the graph as required. I used Libreoffice Calc to create these charts. 

Let me know if you find this blog useful and need any help in writing SQL queries :)

