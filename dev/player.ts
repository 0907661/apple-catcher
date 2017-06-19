/// <reference path="gameobjects.ts"/>

class Player extends Gameobjects {

    private basket: Basket;

    // Constructing the game objects
    constructor() {
        // Using super to access parent class
        super(); {
            // Creates the basket
            this.div = document.createElement("player");
            document.body.appendChild(this.div);

            this.basket = new Basket(this);

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
        this.width = 854;
        this.height = 357;

        this.x =(window.innerWidth / 2 - 175);
        this.y =(window.innerHeight - 450);
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
                this.leftSpeed = 75;
                break;
            case 68:
                this.rightSpeed = 75;
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