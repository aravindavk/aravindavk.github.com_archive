Count down begins for Gnu Linux habba 2009
##########################################

:slug: count-down-begins-for-gnu-linux-habba-2009
:author: Aravinda VK
:date: 2009-01-27
:tags: javascript
:summary: I have created a JavaScript widget for days countdown. You can use this in your websites.

I have created a JavaScript widget for days countdown. You can use this in your websites. 

Preview (Below image is preview only)
-------------------------------------


.. image:: /images/habba-countdown-preview.png
   :alt: Habba preview


How to use?
-----------

Create a DIV container in your webpage, Include the below script inside that container. You can apply positioning styles to that container. 

.. code-block:: html

    <script type="text/javascript" src="http://aravinda-vk.appspot.com/js/countdown.js">
    </script>
    <!-- or design2 -->
    <script type="text/javascript" src="http://aravinda-vk.appspot.com/js/countdown-design2.js">
    </script>


Example
-------

.. code-block:: html

    <div style="float:right;margin-right:10px;">
    <script type="text/javascript" src="http://aravinda-vk.appspot.com/js/countdown.js">
    </script>
    </div>


How it works
------------

Javascript will fetch the current date in IST based on your system time and calculates the number of days left for the event. Seperate images created with the name of number of days remaining(Like 12.png, 11.png, 0.png)

Image source will be dynamically generated based on the number of days remaining. 

.. code-block:: javascript

    /* File Name: countdown.js 
     * This script will display the image based on the number of days left 
     */
    // Hosted at
    var basePath = "http://aravinda-vk.appspot.com/";
    
    // get todays date and convert to IST
    var today = new Date();
    // +5.5hrs = 330 mins
    today.setTime(today.getTime() +  (today.getTimezoneOffset()+330)*60*1000);  
    
    // get Event date and convert to IST
    var eventDate = new Date("February 07, 2009");
    eventDate.setTime(eventDate.getTime() +  (eventDate.getTimezoneOffset()+330)*60*1000);  //+5.5hrs = 330 mins
    var miliSecsPerDay = 86400000;  //24 * 60 * 60 * 1000 ;
    
    // Calculate days left
    var numDaysRemaining = Math.floor((eventDate.getTime() - today.getTime())/miliSecsPerDay) + 1;
    
    // Display If event is not over
    if(numDaysRemaining >= 0){
        imgSrcString = '<img src="' + basePath + 'img/' + numDaysRemaining + '.png" ';
        imgSrcString = imgSrcString + ' alt="Gnu/Linux Habba in ' + numDaysRemaining + ' days" ';
        imgSrcString = imgSrcString + ' title="Gnu/Linux Habba in ' + numDaysRemaining + ' days" ';
        imgSrcString = imgSrcString + ' style="border:0px;" />'; 
        document.write('<a href="http://habba.in">' + imgSrcString + '</a>');
    }
