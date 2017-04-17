// IIFE - Immediately Invoked Function Expression
(function(){

// Function Level Variables
let canvas:HTMLElement;
let stage:createjs.Stage;
let helloLabel:objects.Label;
let goodByeLabel:objects.Label;

let clickMeButton:createjs.Bitmap;

/**
 * This method initializes the createjs Stage object and
 * starts the Game Loop
 *
 * @method Start
 * @returns void
 */
function Start() {
  // gets a reference ("hook") into the canvas element
  canvas = document.getElementById("canvas");
  // creates a new stage container - parent container for our app
  stage = new createjs.Stage(canvas);
  createjs.Ticker.framerate = 30; // set framerate to 30 FPS
  createjs.Ticker.on("tick", Update); // call the Update method every frame

  Main(); // call the main function
}

/**
 * the main app ("Game") loop - gets called every frame (approx every 16 ms)
 *
 * @method Update
 * @returns void
 */
function Update(event:createjs.Event):void {

  helloLabel.x = helloLabel.x + 5; // move the text to the right of the canvas every frame

  goodByeLabel.y = goodByeLabel.y + 7; // move the text to the bottom of the canvas every frame

  stage.update(); // redraw the stage
}

/**
 * 
 *
 * @method Main
 * @returns void
 */
function Main():void {
  console.log("App Started!!");


  // add a helloLabel to the stage
  helloLabel = new objects.Label("Click on Projects! For Star Wars Movie Poster", "20px", "Consolas", "#000000", 125, 125, true);
  stage.addChild(helloLabel);

  // add a goodbyeLabel to the stage
  goodByeLabel = new objects.Label("Or Click Projects Button!", "24px", "Arial", "#FF0000", 125, 125, true);
  stage.addChild(goodByeLabel);

  // add a projectsButton to the stage
  projectsButton = new createjs.Bitmap("../../Assets/images/ProjectsButton.svg");
  projectsButton.regX = projectsButton.getBounds().width * 0.5;
  projectsButton.regY = projectsButton.getBounds().height * 0.5;
  projectsButton.x = 125;
  projectsButton.y = 200;
  stage.addChild(projectsButton);

  projectsButton.on("click", function() {
    helloLabel.text = "Click on Projects! For Star Wars Movie Poster";
    goodByeLabel.text = "Or Click Projects Button!";
  });
}

window.onload = Start;

})();
