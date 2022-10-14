<!DOCTYPE html>
<html>
<head></head>
<body>

<h2> Thank you for submitting your comments!</h2>  

  <a href="/">Click here to go back...</a>

<?php
echo "My first PHP script!";
echo $_GET["fname"];

ob_start();
echo "My first PHP script!";
file_put_contents('action-1.html',ob_get_contents());
ob_end_flush();

?>
  
</body>
</html>