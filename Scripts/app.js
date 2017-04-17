// File name: app.js 
// Author's name: Jesse Cannon 
// Web site name: http://comp1073-jessecannon-assignment3-miniportfolio-json-data.azurewebsites.net/index.html
// File description: main page JavaScript for my mini portfolio 

"use strict";
// start of the IIFE
(function () {

    function Start() {
        LoadIndexContent();
        LoadProjectContent();
        LoadContactContent();
    }
    // Loads the main page using AJAX
    function LoadIndexContent() {
        let index = document.getElementById("index");
        let FirstParagraph;
        let firstParagraphXHR = new XMLHttpRequest();
        firstParagraphXHR.open("GET", "../index.html", true);
        firstParagraphXHR.send();
        firstParagraphXHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                FirstParagraph = this.responseText;
            }
        }
   
    // Loads the first project using AJAX
    function LoadProjectContent() {
        let project1 = document.getElementById("project1");
        let FirstProject;
        let firstProjectXHR = new XMLHttpRequest();
        firstProjectXHR.open("GET", "../project.html", true);
        firstProjectXHR.send();
        firstProjectXHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                FirstProject = this.responseText;
            }
        }
    // Loads the second project using AJAX
    function LoadProjectContent() {
        let project2 = document.getElementById("project2");
        let SecondProject;
        let secondParagraphXHR = new XMLHttpRequest();
        secondParagraphXHR.open("GET", "../project.html", true);
        secondParagraphXHR.send();
        secondParagraphXHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                SecondProject = this.responseText;
            }
        }
    // Loads the third project using AJAX
    function LoadProjectContent() {
        let project3 = document.getElementById("project3");
        let ThirdProject;
        let thirdProjectXHR = new XMLHttpRequest();
        thirdProjectXHR.open("GET", "../project.html", true);
        thirdProjectXHR.send();
        thirdProjectXHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                ThirdProject = this.responseText;
            }
        }
    // Loads the contact page using AJAX
    function LoadContactContent() {
        let contact = document.getElementById("contact");
        let FirstContactParagraph;
        let contactXHR = new XMLHttpRequest();
        contactXHR.open("GET", "../contact.html", true);
        contactXHR.send();
        contactXHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                FirstContactParagraph = this.responseText;
            }
        }

    // added event listener for each page
    paragraphXHR.addEventListener("load", function () {
        index.innerHTML = myHTMLContent;
        switch (document.title) {
            case "Home":
                    var index = document.getElementById("index");
                    break;
                case "Projects1":
                    var projects = document.getElementById("project1");
                    break;
                    case "Projects2":
                    var projects = document.getElementById("project2");
                    break;
                    case "Projects3":
                    var projects = document.getElementById("project3");
                    break;
                case "Contact":
                    var contact = document.getElementById("contact");
                    break;
            }


             // Loads content for each page
         function LoadPageContent() {
         switch (document.title) {
            case "Home":
                LoadHomePage();
                break;
            case "Projects":
                LoadProjectsPage();
                break;
            case "Contact":
                LoadContactPage();
                break;
        }
    }
        });
}



// home page JavaScript 
console.log("App Started");
console.info('Page Title: ${document.title}');

// declare/ initialize firstHeading variable 
let firstHeading = document.getElementById("firstHeading");

console.log(firstHeading.textContent);

switch (document.title) {
    case "Home":

// connecting myContent to my index.html page 
var FirstParagraph = document.getElementById("FirstParagraph");

var myContent = "Hello, my name is Jesse Cannon and my goal of this portfolio site is to show you all of my web design skills I have acquired from my time at Georgian College. My Projects page will display all of the top pieces of work I have done so far for visuals. While the Contact page will ask you for your contact information. I hope my page is of great use to you. Jesse Cannon.";

FirstParagraph.textContent = myContent;

// added a second paragraph section where my image went
var SecondParagraph = document.getElementById("SecondParagraph");
var myHTMLContent = '<h2>About Me</h2>';

SecondParagraph.innerHTML = myHTMLContent;

// add an event listener - for the click event and call the Click function
SendButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
    console.log("clicked");
}
    break;

    var firstHeadingContact = document.getElementById("firstHeadingContact");

console.log(firstHeadingContact.textContent);
   
  case "Contact Me":

  // connecting myContent to my contact.html page 
var FirstContactParagraph = document.getElementById("FirstContactParagraph");

var mySecondContent = "If you would like to contact me for further information of my work please feel free to reach me by leaving your Name, Number, Email and a short message of what you would like to discuss.";

FirstContactParagraph.textContent = mySecondContent; 
    let FullName = document.getElementById("FullName");
    let ContactNumber = document.getElementById("ContactNumber");
    let Email = document.getElementById("Email");
    let Message = document.getElementById("Message");
    let SendButton = document.getElementById("SendButton");

    SendButton.addEventListener("click", function(event){
        event.preventDefault();

        // console.log(FullName);
        // console.log(ContactNumber);
        // console.log(Email);
        // console.log(Message);

        // create variables to store inputs
        let FullName = document.getElementById('FullName').value;
        let ContactNumber = document.getElementById('ContactNumber').value;
        let Email = document.getElementById('Email').value;
        let Message = document.getElementById('Message').value;

        // save inputs
        $(function() {
            $('SendButton').submit(function() {
                console.log('FullName: '+$('input[name="FullName]').val() + 'ContactNumber: '+$('input[name="ContactNumber]').val() + 
                'Email: '+$('input[name="Email]').val() + 
                'Message: '+$('input[name="Message]').val());
            });
        });
    }
    )
    break;
}
// end of the IIFE 
})();  
