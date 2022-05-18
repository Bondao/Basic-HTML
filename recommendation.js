/*
document.getElementById("eventDescription").innerHTML = sessionStorage.getItem("description");
document.getElementById("bfasjkfbjk")
*/


// retrieving the value from the URL and saving it in the variable "image"
var image = new URLSearchParams(window.location.search).get("event"); 

// retrieving the value from the session storage item called "descr" and saving it in the variable description
var description = sessionStorage.getItem("descr");

//declaring the source for the <img> HTML tag
document.getElementById("eventImage").src = "images/"+image+".jpg"; 

// setting the Text within the <p></p> tags
document.getElementById("eventDescription").innerHTML = description; 

// defining a function that is called by the "Buy now" button when clicked



function buyTickets(){

  //retrieves the value of the <Select> HTML tag
  let ticketAmount = document.getElementById("tickets").value;

  //Concatenating the variable ticketAmount with a String and putting it into an HTML tag with the ID "orderConfirmation"
  document.getElementById("orderConfirmation").innerHTML = "Thank you for buying " + ticketAmount + " Tickets.";

  // Changing the Style of the HTML element so that it is shown
  document.getElementById("orderConfirmation").style.display = "block";
}

