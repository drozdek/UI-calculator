<?php

/**
 * @method parse_csv  - parse CSV file  
 * 
 */

 function parse_csv($file){
  echo "<table border='1'>";
    if (($handle = fopen($file, 'r')) !== FALSE) { 
      
      while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) { 
        echo "<tr>";
          for ($i = 0; $i < count($data); $i++) {
            echo "<td>". ($arr = $data[$i]) . "</td>";
          }
          echo "</tr>";
      }
      fclose($handle);
    }
  echo "</table>";
 };

 parse_csv("file.csv");
?>