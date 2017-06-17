/// <reference path="gameobjects.ts"/>

class StartGame {
    private score: Element;
    private button: HTMLButtonElement;

        constructor(){
            // Creates the start button
            this.button = document.createElement("button");
            this.button.className = "startButton";
            document.body.appendChild(this.button);
            // Starts the game when clicked
            this.button.addEventListener("click", function() {
                    new Game();
                    this.remove();
                });
            // Sets the score text to match the start screen
            this.score = document.getElementsByTagName("ui")[0];
            this.score.innerHTML = "Try to catch all 20 apples!";
            this.button.innerText = "Start game!";
        }
}