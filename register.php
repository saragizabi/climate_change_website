<HTML>
<head>
	<title> signup page </title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
	<link rel="stylesheet" href="css/final.css" type="text/css">

<style>
body, html {
  height: 100%;
  font-family: "Inconsolata", sans-serif;
}

.bgimg {
  background-position: center;
  background-size: cover;
  background-image: url("images/oce.jpeg");
  min-height: 75%;
}

.menu {
  display: none;
}

</style>

</head>
<body>
<!-- Links (sit on top) -->
<div class="w3-top">
  <div class="w3-row w3-padding w3-black">
    <div class="w3-col s2">
      <a href="index.html" class="w3-button w3-block w3-black">HOME</a>
    </div>
    <div class="w3-col s2">
      <a href="products.html" class="w3-button w3-block w3-black"> SHOPPING CART</a>
    </div>
    <div class="w3-col s2">
      <a href="register.html" class="w3-button w3-block w3-black">REGISTER</a>
    </div>
    <div class="w3-col s2">
      <a href="login.html" class="w3-button w3-block w3-black">LOGIN</a>
    </div>
    <div class="w3-col s2">
      <a href="#" class="w3-button w3-block w3-black">SEARCH</a>
    </div>
    <div class="w3-col s2">
      <a href="contact.html" class="w3-button w3-block w3-black">CONTACT</a>
    </div>
  </div>
</div>


<div class="w3-sand w3-grayscale w3-large">
  <br>
  <br>
<h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide"> THANKS FOR REGISTERING! </span></h5>


<?php 

$username = $_POST["username"];
$password = $_POST["password"];

// open a file to write - myuser.txt
$line = $username . ":" . $password . "\n";

$file = fopen("user.txt", "a") or die("couldn't open file");

// write the linee to file using fwrite()
//print($line);

fwrite($file, $line);

fclose($file);

print(" <div class='w3-content forms' style='max-width:500px; padding: 10px'> <br> <p> your account has been created! </p> <p> you can now login to our webpage!! </p> <br> </div>");


?>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</div>
</body>
</HTML>