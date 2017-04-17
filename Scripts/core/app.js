/* File name: app.js */
/* Author's name: Jesse Cannon */
/* Student ID: 200348532 */
/* Web site name: http://assignment4-javascript-banner-ad.azurewebsites.net/index.html */
/* File description: JavaScript page for my mini portfolio JavaScript Banner Ad */


// IIFE - Immediately Invoked Function Expression
(function () {
    // Function Level Variables
    var canvas;
    var stage;
    var helloLabel;
    var goodByeLabel;
    var projectsButton;
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
        // ccreated a new stage container
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 30; // set framerate to 30 FPS
        createjs.Ticker.on("tick", Update); // call the Update method every frame
        Main(); 
    }
    /**
     * the main app ("Game") loop - gets called every frame (approx every 16 ms)
     *
     * @method Update
     * @returns void
     */
    // helloLabel moving the text towards the right of the canvas
    function Update(event) {
        helloLabel.x = helloLabel.x + 5;
		if (helloLabel.x > stage.canvas.width) { helloLabel.x = 0; }
		stage.update(event);

        // goodbyeLabel moving the text towards the bottom of the canvas
        goodByeLabel.y = goodByeLabel.y + 7;
		if (goodByeLabel.y > stage.canvas.width) { goodByeLabel.y = 0; }
		stage.update(event);

       
    }
    /**
     * 
     *
     * @method Main
     * @returns void
     */
    function Main() {
        console.log("App Started!!");
        // added a helloLabel to the stage for the first set of text
        // made the text colour green
        helloLabel = new objects.Label("Click on Projects! For Star Wars Movie Poster", "20px", "Consolas", "green", 125, 125, true);
        stage.addChild(helloLabel);
        // add a goodbyeLabel to the stage for the second set of text
        // made the text colour black
        goodByeLabel = new objects.Label("Or Click Projects Button!", "24px", "Arial", "black", 125, 125, true);
        stage.addChild(goodByeLabel);
        // add a projectsButton to the stage
        projectsButton = new createjs.Bitmap("../../Assets/images/projectsButton.png");
        projectsButton.regX = projectsButton.getBounds().width * 0.5;
        projectsButton.regY = projectsButton.getBounds().height * 0.5;
        projectsButton.x = 225;
        projectsButton.y = 310;
        stage.addChild(projectsButton);

        // added link to projects page when button is clicked
        projectsButton.on("click", function () {
            location.href = "http://assignment4-javascript-banner-ad.azurewebsites.net/projects.html";
            helloLabel.text = "Thanks for Clicking!";
            goodByeLabel.text = "Hope you Enjoy!";
        });
    }
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map