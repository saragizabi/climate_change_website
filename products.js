var gtotal = 0;

var items = document.getElementById("bags");

items.addEventListener('input', function(total) {; 

   var items = document.getElementById('bags').value;
   var price = document.getElementById('price1').value;

   var stotal = items * price;
   gtotal += stotal;
   document.getElementById("subtotal1").value= stotal;

});

var items2 = document.getElementById('wraps');

items2.addEventListener('input', function(total2) {;

   // second tickets

   var items2 = document.getElementById('wraps').value;
   var price2 = document.getElementById('price2').value;

   var stotal2 = items2 * price2;
   gtotal += stotal2;
   document.getElementById("subtotal2").value= stotal2;

} );

var items3 = document.getElementById('utensils');

items3.addEventListener('input', function(total3) {;

   // second tickets

   var items3 = document.getElementById('utensils').value;
   var price3 = document.getElementById('price3').value;

   var stotal3 = items3 * price3;
   gtotal += stotal3;
   document.getElementById("subtotal3").value= stotal3;

} );

var items4 = document.getElementById('straws');

items4.addEventListener('input', function(total4) {;

   // second tickets

   var items4 = document.getElementById('straws').value;
   var price4 = document.getElementById('price4').value;

   var stotal4 = items4 * price4;
   gtotal += stotal4;
   document.getElementById("subtotal4").value= stotal4;

} );

var items5 = document.getElementById('bottles');

items5.addEventListener('input', function(total5) {;

   // second tickets

   var items5 = document.getElementById('bottles').value;
   var price5 = document.getElementById('price5').value;

   var stotal5 = items5 * price5;
   gtotal += stotal5;
   document.getElementById("subtotal5").value= stotal5;

} );

var items6 = document.getElementById('compost');

items6.addEventListener('input', function(total6) {;

   // second tickets

   var items6 = document.getElementById('compost').value;
   var price6 = document.getElementById('price6').value;

   var stotal6 = items6 * price6;
   gtotal += stotal6;
   document.getElementById("subtotal6").value= stotal6;

} );

//gtotal = stotal + stotal2;

//document.getElementById("grand").value= gtotal;

//-------------------------
//access the first form object

let obj= document.forms[0];


// add an eventlistener (submit event) to the form object (collecting all of the names and values for all form elements)
obj.addEventListener("submit", function(receipt)
{
// to stop form from submitting to new page (stays anchored on the same page so you can see the output)
receipt.preventDefault();

// get how many elements in the form
let len = obj.elements.length;

let text = "<div class='w3-content forms' style='max-width:600px'> <h5 class='w3-center w3-padding-64'><span class='w3-tag w3-wide'> THANK YOU FOR YOUR PURCHASE </span></h5>";


// iterate through all of the form elements making sure there is a value entered for each element and validate zip code, and email

for (let i=0; i < len -2; i++)
{

if ((obj.elements[i].value == "") || (obj.elements[i].value == null))
{

   alert("Make sure to input " + obj.elements[i].name);

   // bring focus to the element that has no value
   obj.elements[i].focus();

   // selects the element that has no value
   obj.elements[i].select();

   // highlights the background with red so it brings attention to the element that's empty and requires the user to enter a value
   obj.elements[i].style.backgroundColor="pink";

   // return so nothing would be done as user needs to enter the missing value
   return;
}

// if there is a value, and this is the 3rd element (zip code) then make sure it's has 5 digits (validating the zip code)
else if ((i == 2 ) && (obj.elements[i].value.length != 5)  )
{

   alert("Make sure to input the 5 digits for " + obj.elements[i].name);
   obj.elements[i].focus();
   obj.elements[i].select();
   obj.elements[i].style.backgroundColor="pink";
   return;
}


// if there is a value, and this is the 4th element (email) then make sure it's has an '@' in the email (validating the email)
else if ((i == 3 ) && (obj.elements[i].value.indexOf("@") == -1))
{

   alert("Your email should include the '@' for this " + obj.elements[i].name);
   obj.elements[i].focus();
   obj.elements[i].select();
   obj.elements[i].style.backgroundColor="pink";
   return;
}

// if there is a value, and this is the 4th element (email) then make sure it's has a '.' the email (validating the email)

else if ((i == 3 ) &&  (obj.elements[i].value.indexOf(".") == -1))
{

   alert("Your email should include the '.' for this " + obj.elements[i].name);
   obj.elements[i].focus();
   obj.elements[i].select();
   obj.elements[i].style.backgroundColor="pink";
   return;
}

else if ((i == 5 ) && (obj.elements[i].value.length != 16)  )
{

   alert("Make sure to input the 16 digits for the " + obj.elements[i].name);
   obj.elements[i].focus();
   obj.elements[i].select();
   obj.elements[i].style.backgroundColor="pink";
   return;
}

else if ((i == 6 ) && (obj.elements[i].value.length != 10)  )
{

   alert("Make sure to input the 10 digits for the " + obj.elements[i].name);
   obj.elements[i].focus();
   obj.elements[i].select();
   obj.elements[i].style.backgroundColor="pink";
   return;
}

else 
{

if (i == 5) {
   text += obj.elements[5].name + ": ";
   var transform = obj.elements[5].value.toString();
   for(let x=0; x < 16; x++) {
      if (x < 12) {
         text += "X"
      }
      else {
         text += transform[x]
      }
   }
   text += "<br> <br>";
   continue;
}


if (i == 7) {
   if (obj.elements[7].value == "Amex") {
      text += obj.elements[i].name;
      text += ": ";
      text += obj.elements[i].value;
      text += "<br> <br>";
      continue;
   }

   else if (obj.elements[7].value == "Visa") {
      text += obj.elements[i].name;
      text += ": ";
      text += obj.elements[i].value;
      text += "<br> <br>";
      continue;
   }

}

text += obj.elements[i].name;

text += ": ";

text += obj.elements[i].value;

text += "<br> <br>";

}


}

// add grand total HERE 


//if (obj.elements[4].value == "Shipping") {
//   gtotal += 10;
//}

text += "Grand total is: $" + gtotal + " <br> <br>";

// display the output inside the element with id=demo

var date = new Date();
var current_date = (date.getMonth()+1) + "-" + date.getDate() + "-" + date.getFullYear();

text += "The date of the reciept is " + current_date + "<br> <br> </div>";
//console.log(dateTime)

text += '<br> <a href="cart.html"> <button> more info </button> </a> <br> ';

document.getElementById("demo").innerHTML= text;
console.log(text);

} ) ;

// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
//document.getElementById("myLink").click();

