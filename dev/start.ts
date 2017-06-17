class Start{
    constructor(){
    window.addEventListener("click", (e: MouseEvent) => this.onClick(e));
    }

    public onClick(event: MouseEvent): void {
        // Sets the speed for horizontal movement
        // using the 'A' and 'D' key
        switch (event.button) {
            case 1:
                //this.leftSpeed = 70;
                break;
        }
    }
}