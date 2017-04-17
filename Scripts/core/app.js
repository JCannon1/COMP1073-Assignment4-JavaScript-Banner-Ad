// IIFE - Immediately Invoked Function Expression
(function () {
    // Function Level Variables
    var canvas;
    var stage;
    var helloLabel;
    var goodByeLabel;
    var clickMeButton;
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
        createjs.Ticker.framerate = 30; // set framerate to 60 FPS
        createjs.Ticker.on("tick", Update); // call the Update method every frame
        Main(); // call the main function
    }
    /**
     * the main app ("Game") loop - gets called every frame (approx every 16 ms)
     *
     * @method Update
     * @returns void
     */
    // helloLabel moving towards the righ of the canvas
    function Update(event) {
        helloLabel.x = helloLabel.x + 5;
		if (helloLabel.x > stage.canvas.width) { helloLabel.x = 0; }
		stage.update(event);

        goodByeLabel.y = goodByeLabel.y + 7;
		if (goodByeLabel.y > stage.canvas.width) { goodByeLabel.y = 0; }
		stage.update(event);

       
    }
    /**
     * This method is where all the fun happens - we add child objects to the stage here
     *
     * @method Main
     * @returns void
     */
    function Main() {
        console.log("App Started!!");
        // all objects added to the stage appear in "layer order"
        // add a helloLabel to the stage
        helloLabel = new objects.Label("Click on Projects! For Star Wars Movie Poster", "20px", "Consolas", "green", 125, 125, true);
        stage.addChild(helloLabel);
        // add a goodbyeLabel to the stage
        goodByeLabel = new objects.Label("Or Click Projects Button!", "24px", "Arial", "black", 125, 125, true);
        stage.addChild(goodByeLabel);
        // add a projectsButton to the stage
        projectsButton = new createjs.Bitmap("../../Assets/images/projectsButton.png");
        projectsButton.regX = clickMeButton.getBounds().width * 0.5;
        projectsButton.regY = clickMeButton.getBounds().height * 0.5;
        projectsButton.x = 5;
        projectsButton.y = 2;
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