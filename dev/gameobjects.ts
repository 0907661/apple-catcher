class Gameobjects {
    // Declaring and initializing variables
    public div: HTMLElement;
    public x: number;
    public y: number;
    public id: number = 0;
    public width: number;
    public height: number;
    public speed: number = 0;
    public leftSpeed: number = 0;
    public rightSpeed: number = 0;

    constructor() {
    }

    public update(): void {
        // Draws the div's on screen
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

}