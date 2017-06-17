/// <reference path="gameobjects.ts"/>

class Border extends Gameobjects {
    // Constructing the game objects
    constructor() {
        // Using super to access parent class
        super(); {
            // Creates the basket
            this.div = document.createElement("border");
            document.body.appendChild(this.div);
            this.startPosition();
        }
    }

    private startPosition(){
        // Puts the basket in the middle of the screen
         // and initializing variables
        this.width = innerWidth;
        this.height = 100;

        this.x = 0;
        this.y =(window.innerHeight - 100);
    }

    public update(){
        super.update();
    }
}