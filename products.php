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


<div class="w3-sand w3-grayscale w3-large">
  <br>
  <br>
<h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide"> PRODUCT INFO: </span></h5>

<?php 

$name = $_POST["name"];
$email = $_POST["email"];
$address = $_POST["address"];
$cc_num = $_POST["ccnum"];
$phone = $_POST["pn"];


$cc_len = strlen((string)$cc_num);
$p_len = strlen((string)$phone);




if($cc_len == 16 && $p_len == 10) {
  $file = fopen("clients.txt", "a") or die("couldn't open file");

  // create a string
  $line = $name . ":" . $email . ":" . $address . ":" . $cc_num . ":" . $phone . "\n";

  fwrite($file, $line);

  fclose($file);

  print('<br> thank you for filling out the form, enjoy your order. <br> <br> <br> <br>');

  print('<a href="index.html">
            <button> go home </button>
    </a>');

} 

else {
    print('<br> filled out fields incorrectly. <br> <br> <br> <br>');

    print('<a href="cart.html">
            <button> go back </button>
    </a>');

}

// open a file to write - myuser.txt
// $line = $fname . ":" . $lname . ":" . $zc . ":" . $email . ":" . $address . ":" . $cc_num . ":" . $cc_type . "\n";


// write the linee to file using fwrite()
//print($line);


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