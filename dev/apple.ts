/// <reference path="gameobjects.ts"/>

class Apple extends Gameobjects{

    private game: Game;
    private randomSpeed: number;

    // Constructing the game objects
    constructor(g: Game) {
        // Using super to acces the parent class
        super(); {
            this.game = g;

            // Creates the apple
            this.div = document.createElement("apple");
            document.body.appendChild(this.div);
            this.startPosition();
        }
    }

    private startPosition(){
        // Sets a random location on the x axis
        // and initializing variables
        this.x = Math.random() * (window.innerWidth-252);
        this.y = -300;
        this.width = 135;
        this.height = 147;

        this.speed = Math.floor(Math.random() * (50 - 30 + 1) + 30);
    }

    public inBasket(){
        // Adds 1 point to the score
        this.game.display.updateScore(1);

        // Deletes the div and stops continuous collision
        this.y = -300;
        this.speed = 0;
        this.div.remove();
    }

    public update(){
        // If the apple leaves the screen
        if( this.y - 300 > window.innerHeight || this.y < -300) {
            // 1 point will be subtracted from the score
            // and deletes the div
            this.y = -300;
            this.speed = 0;
            this.div.remove(); 

        }

        // Sets the apple falling speed
        this.y += this.speed;
        super.update();
    }



}