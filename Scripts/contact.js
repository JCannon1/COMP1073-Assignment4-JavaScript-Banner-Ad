/* File name: contact.js */
/* Author's name: Jesse Cannon */
/* Student ID: 200348532 */
/* Web site name: http://assignment4-javascript-banner-ad.azurewebsites.net/contact.html */
/* File description: Contact page JavaScript for my mini portfolio JavaScript Banner Ad */


// contact page JavaScript 

console.log("App Started");

var firstHeadingContact = document.getElementById("firstHeadingContact");

console.log(firstHeadingContact.textContent);

// connecting myContent to my contact.html page 
var FirstContactParagraph = document.getElementById("FirstContactParagraph");

var myContactContent = "If you would like to contact me for further information of my work please feel free to reach me by leaving your Name, Number and a short message of what you would like to discuss."

FirstContactParagraph.textContent = myContactContent; 