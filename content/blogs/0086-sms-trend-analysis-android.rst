SMS trend analysis - Android
############################

:slug: sms-trend-analysis-android
:author: Aravinda VK
:date: 2013-04-09
:tags: english,sms,android,sql
:summary: Now a days my incoming and outgoing SMS trend looks like this for some reason :)

Now a days my incoming and outgoing SMS trend looks like this for some(known) reason :)


.. figure:: /images/incoming_sms_trend.png
   :alt: Incoming sms trend

   Incoming SMS trend(Nov 2012 - Apr 2013)

.. figure:: /images/outgoing_sms_trend.png
   :alt: Outgoing sms trend

   Outgoing SMS trend(Nov 2012 - Apr 2013)

**PS**: Sometimes I delete telemarketing SMS as and when I receive, so incoming trend may not show actual :) Also while playing with Android OS I lost all the SMS prior to Nov 2012.

\***

Continue reading if you are wondering how I extracted the SMS data from the phone.

prerequisites:
==============
0. Android phone
1. Your Android phone should be rooted one.
2. Android SDK should be installed.
3. Debugging should be enabled in your android phone.

Idea:
=====
In Android, SMS data is stored in sqlite database, and it is located in the following directory(in phone).

.. code-block:: bash

    /data/data/com.android.providers.telephony/databases/mmssms.db


So we can run sql queries to get the details from sms table as per our need. To access the data from db, Android phone should be rooted. 

Add :code:`adb` path(in my machine adb path is :code:`/home/aravinda/android-sdk/platform-tools/`) to environment variable PATH, and run :code:`adb` as root. 

.. code-block:: bash

    adb root


In sqlite we can see the list of tables present in a database using :code:`.tables` (:code:`sqlite3 <db path> ".tables"`) query.

.. code-block:: bash

    adb shell 'sqlite3 /data/data/com.android.providers.telephony/databases/mmssms.db ".tables"'


and we can get schema of the required sqlite table using :code:`.schema <table name>` query.

.. code-block:: bash

    adb shell 'sqlite3 /data/data/com.android.providers.telephony/databases/mmssms.db ".schema sms"'


.. code-block:: sql

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

**The only limitation is your imagination :D**

**Example**: Number of sms sent per day.

Query is

.. code-block:: sql

    SELECT STRFTIME("%Y%m%d", DATETIME(date/1000, "unixepoch", "localtime")) dte,
           COUNT(_id)
    FROM sms
    WHERE type = 2
    GROUP BY dte
    ORDER BY dte

where type 2 is sent and 1 is received.

.. code-block:: bash

    adb shell 'sqlite3 /data/data/com.android.providers.telephony/databases/mmssms.db \
    "SELECT STRFTIME(\"%Y%m%d\", DATETIME(date/1000, \"unixepoch\", \"localtime\")) dte,  \
    COUNT(_id) FROM sms WHERE type = 2 GROUP BY dte ORDER BY dte"'


If you want to find number of sms sent per day for a particular phone number then add the condition in WHERE clause as follows

.. code-block:: sql

    SELECT STRFTIME("%Y%m%d", DATETIME(date/1000, "unixepoch", "localtime")) dte,
           COUNT(_id)
    FROM sms
    WHERE type = 2
    GROUP BY dte
    ORDER BY dte
    AND REPLACE(REPLACE(address, "+91",""), " ", "") = "XXXXX"


I created `Python script <https://gist.github.com/aravindavk/5339192>`__ to extract data as described above. Additionally script generates csv output which can be used to plot as required. Use any familiar library(Matplotlib, PhantomJS and d3, flot etc..) or just use Spreadsheet to plot the graph as required. I used Libreoffice Calc to create these charts. 

Let me know if you find this blog useful and need any help in writing SQL queries :)
