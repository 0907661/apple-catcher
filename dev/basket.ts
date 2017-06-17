/// <reference path="gameobjects.ts"/>

class Basket extends Gameobjects {

    // Constructing the game objects
    constructor() {
        // Using super to access parent class
        super(); {
            // Creates the basket
            this.div = document.createElement("basket");
            document.body.appendChild(this.div);
            this.startPosition();

            // Adds the key down and up event listener
            // allowing me to set the speed
            window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
            window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
        }
    }

    private startPosition(){
        // Puts the basket in the middle of the screen
         // and initializing variables
        this.width = 377;
        this.height = 302;

        this.x =(window.innerWidth / 2 - 175);
        this.y =(window.innerHeight - 400);
    }

    public update(){
        // Only allows movement within the width of the screen
        let targetX = this.x - this.leftSpeed + this.rightSpeed;
        if(targetX > 0 && targetX + 300 < window.innerWidth) this.x = targetX;
                        
        super.update();
    }

    public onKeyDown(event: KeyboardEvent): void {
        // Sets the speed for horizontal movement
        // using the 'A' and 'D' key
        switch (event.keyCode) {
            case 65:
                this.leftSpeed = 70;
                break;
            case 68:
                this.rightSpeed = 70;
                break;
        }
    }

    public onKeyUp(event: KeyboardEvent): void {
        // Sets the speed to 0 when the moevement keys
        // aren't held down
        this.leftSpeed = 0;
        this.rightSpeed = 0;
    }

}