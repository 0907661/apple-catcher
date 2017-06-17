/// <reference path="gameobjects.ts"/>

class Game {
    // Declaring variables
    private basket: Basket;
    private border: Border;
    private apples: Array<Apple>;
    public displayScore: Score;
    private game: Game;
    public collision: Collision;
    public updateNumber: number = 0;

    public get display(): Score {
		return this.displayScore;
	}
	public set display(value: Score) {
		this.displayScore = value;
	}

    // Constructing the game objects
    constructor() {
        this.displayScore = new Score();
        this.collision = new Collision();
        this.basket = new Basket;
        this.apples = new Array<Apple>();
        this.border = new Border();
        
        // Pushes a new apple into the apples array every 1 seconds
        setInterval( () => this.pushApple(), 1000);
        
        // Updates the score on screen every 0.01 seconds
        setInterval(() => this.updateApples(), 10);

        // Executes the gameloop on every screen repaint
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    // Pushes a new apple into the apples array and keeps track
    public pushApple(){
        if(this.apples.length < 20){
            this.apples.push(new Apple(this));
        }
    }

    // Updates the score on screen
    public updateApples(){
        if(this.apples.length < 20){
            this.displayScore.scoreText = "Apples caught: " + this.displayScore.score;
        }
        else{
            if (this.displayScore.score == 20){
                this.displayScore.scoreText = "You've caught all the apples, well done!";
            } else if(this.displayScore.score !== 20){
                this.displayScore.scoreText = "You've managed to catch " + this.displayScore.score + " apples. Try to catch them all next time!";
            }
        }
    }

    // Updates the drawn game objects
    private gameLoop() {
        this.updateGame();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    // Draws the objects
    private updateGame(){
        this.basket.update();
        this.border.update();
        this.display.update();
        // Updates all the apples in the array
        for (let e of this.apples) {
            e.update();
        }

        // Checks if any apple is collding with the basket
        for (var b of this.apples) {
            if(this.collision.collider(b, this.basket)){
                b.inBasket();
                this.display.updateScore(1);
            } else if(this.collision.borderCollide(b, this.border)){
                b.offScreen();
            }
        }

        
    }
} 


