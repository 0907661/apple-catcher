/// <reference path="gameobjects.ts"/>

class Apple extends Gameobjects{

    private game: Game;
    private randomSpeed: number;
    public applesOffScreen: number = 0;

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
        this.width = 23;
        this.height = 26;

        this.speed = Math.floor(Math.random() * (50 - 30 + 1) + 30);
    }

    public inBasket(){
        // Stops continuous collision and deletes the div 
        this.y = -300;
        this.speed = 0;
        this.div.remove();
    }

    public offScreen(){
        // Stops continuous collision and deletes the div 
        this.y = -300;
        this.speed = 0;
        this.div.remove(); 
    }

    public update(){
        // Sets the apple falling speed
        this.y += this.speed;
        super.update();
    }



}