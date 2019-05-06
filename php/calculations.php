<?php

/**
 * @method parse_csv  parse CSV file  
 * @param {string} $file  file to be parsed 
 */

 /**
  * table shown is not properly formatted at all
  * this is done only for showing purposes !
  * for production css must be used
  * 
  */
 function parse_csv($file){
  echo "<table border='1'>";

  // now a different solution (opposite to previous one - fgetcsv() method )
  // as we're reading the whole file
  // we can treat it as an array 
  // and simply revers one
    $handle = file($file);
    if ( $handle !== FALSE) { 
      $handler = array_reverse($handle);
      foreach ($handler as $key => $value) {
        echo "<tr>";
        echo "<td>" .$value. "</td>";
        echo "</tr>";
      }
    }    
  echo "</table>";
 };

 parse_csv("file.csv");
?>