CouchDB: Auto increment IDs with PHP
####################################

:slug: couchdb-auto-increment-ids-with-php
:author: Aravinda VK
:date: 2010-09-24
:tags: couchdb,php
:summary: CouchDB: Auto increment IDs with PHP

Create a seed, which will be a CouchDB view. 

Map function extracts numeric part of every doc of type "photo".

.. code-block:: javascript

    // Map function
    function(doc){
        if(doc.type == "photo"){
            emit(null, parseInt(doc._id.replace(/\D/g,'')));    
        }
    }



reduce function finds the max value from those numeric values emitted from map function.

.. code-block:: javascript

    // Reduce function
    function(key, values){
        var max = 0;
        for(i in values){
            if(max < values[i]){
                max = values[i];
            }
        }
        return max;
    }


This view is saved as _design/helpers/photoid    

Now write a function in PHP to increment the ID as required and to add the document.

.. code-block:: php

    <?php
    function addDoc($url, $data, $seed, $idprefix, $incrementBy=1){
        // Get the current ID value
        $ch = curl_init("$url/_design/$seed");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $result = json_decode(curl_exec($ch), true);
     
        // Increment and add prefix as per given parameters
        $id = $idprefix . ($result['rows'][0]['value'] + $incrementBy);
     
        // Add document to couchdb
        $ch = curl_init("$url/$id");
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array ("Content-Type: application/json"));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
     
        // Print result
        echo curl_exec($ch);
    }


Example usage of above PHP function

.. code-block:: php

    addDoc("http://localhost:5984/photoblog",
           Array("type"=>"photo", "published"=>0, "place"=>"Karnataka, India"),
           "helpers/_view/photoid",
           "p");


As of now, PHP function involves two http calls for adding single document. Let me know if you find any ways to reduce it to one http call. 
