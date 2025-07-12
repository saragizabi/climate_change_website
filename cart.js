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

text += "Grand total is: $" + gtotal + ".0 <br> <br>";

// display the output inside the element with id=demo

var date = new Date();
var current_date = (date.getMonth()+1) + "-" + date.getDate() + "-" + date.getFullYear();

text += "The date of the reciept is " + current_date + "<br> <br> </div>";
//console.log(dateTime)


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

