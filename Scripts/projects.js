// File name: contact.js 
// Author's name: Jesse Cannon 
// Web site name: http://comp1073-jessecannon-assignment3-miniportfolio-json-data.azurewebsites.net/projects.html
// File description: contact page JavaScript for my mini portfolio 

// project page JavaScript

console.log("App Started");

var firstHeadingProjects = document.getElementById("firstHeadingProjects");

console.log(firstHeadingProjects.textContent);

// created variable for "Project 1" text content 
var FirstProject = document.getElementById("FirstProject");
var myContent = "This first project is one of my favourites as it has a unique design to it and displays my ability to make lists. I also like the use of the background image to add to the overall theme.";
FirstProject.textContent = myContent;

// created variable for "Project 2" text content 
var SecondProject = document.getElementById("SecondProject");
var myHTMLContent = "My second project also shows my ability with HTML, CSS and navigation lists. However, this project was solely designed and created by me and each page has a different style to it. A long with doing this, I was also able to keep the same theme going on as well.";
SecondProject.innerHTML = myHTMLContent;

// created variable for "Project 3" text content 
var ThirdProject = document.getElementById("ThirdProject");
var myThirdContent = "This final project is my favourite piece because I feel I was successfully able to implement several unique design structures into it and it turned out just the way I wanted it to.";
ThirdProject.textContent = myThirdContent;

