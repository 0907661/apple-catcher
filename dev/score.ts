class Score{
    // Declaring and initializing variables
    public score: number;
    private div:Element;
    public scoreText: string;
    
    // Constructing the game objects
    constructor() {
        this.div = document.getElementsByTagName("ui")[0];
        this.div.innerHTML = "Try to catch all 20 apples!"; 
        this.score = 0;
    }
    
    // Checks how many apples have been caught and updates
    // the score accordingly
    public updateScore(applesCaught: number){
        this.score += applesCaught;
        //this.display();
    }
    
    // Sets the HTML text
    public display(){
        this.div.innerHTML = this.scoreText;
    }

    public update(){
        this.display();
    }
}