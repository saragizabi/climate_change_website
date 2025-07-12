<HTML>
<head>
	<title> login page </title>
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
<h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide"> PRODUCT INFO: </span></h5>

<?php 

$input = $_GET['search'];

//$line = $username . ":" . $password . "\n";


$file = fopen("products.txt", "r");

$flag = false;


// read a line at a time
while(!(feof($file))){

	// get one line at time from file
	$line = fgets($file);

	// delete whitespaces (\n) on right side
	$line = rtrim($line);

	// seperate us + pw (rid of colon)
	$data = explode(":", $line);

	if (strpos(strtolower($data[2]), strtolower($input))!== false) {
		$flag = true;
		break;
	}

}

if ($flag) {

	foreach ($data as $value) {
		if ($value == "item - reusable bags") {
				print('<img src="images/bag.avif" alt="bags" class="model">');
			}
		else if ($value == "item - reusable wraps") {
			print('<img src="images/wrap2.png" alt="wraps" class="model">');
		}

		else if ($value == "item - bamboo utensils") {
			print('<img src="images/utensils.webp" alt="utensils" class="model">');
		}

		else if ($value == "item - metal straws") {
			print('<img src="images/straws.webp" alt="utensils" class="model">');
		}

		else if ($value == "item - reuasble bottles") {
			print('<img src="images/bottle.webp" alt="bottles" class="model">');
		}

		else if ($value == "item - compost bin") {
			print('<img src="images/compost.jpeg" alt="compost" class="model">');
		}

	}

	// have a match - print info
	foreach ($data as $value) {
		
		print("<div class='w3-content forms' style='max-width:500px; text-align: left; padding: 10px;'> <li style='text-align: left;'> $value </div>" );
	}
}

else {
	// didn't have a match
	print("<hp> we don’t have this product at our shop. </hp>");
}

//fclose($file);

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


</div>

</body>
</HTML>