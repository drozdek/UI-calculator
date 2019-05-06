<?php
/**
 * get uesrs data 
 */
$data = isset($_POST['data']) ? $_POST['data'] : '';

/**
 * create container obj to contain 
 * properties passed via ajax call
 * 
 */
$obj = new stdClass();
$obj->calculationData = $data['data'];
$obj->browser = $data['browser'];
$obj->date = $data['date'];
$obj->ip = $_SERVER['SERVER_ADDR'];

/**
 * @method getUserIpAddr get IP address
 * @return {string} $ip
 */
function getUserIpAddr(){
  if(!empty($_SERVER['HTTP_CLIENT_IP'])){
      //ip from shared internet
      $ip = $_SERVER['HTTP_CLIENT_IP'];
  }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
      //ip pass from proxy
      $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }else{
      $ip = $_SERVER['REMOTE_ADDR'];
  }
  return $ip;
}

/**
 * create a file handler 
 */
$file = fopen('file.csv', 'a');

/**
 * insert calculation result into file handler
 */
if ($file){
    fputcsv( $file, array ($obj->calculationData, $obj->date, $obj->ip, $obj->browser ));
}

?>