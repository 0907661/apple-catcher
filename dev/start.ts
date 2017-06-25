class Start{
    constructor(){
    window.addEventListener("click", (e: MouseEvent) => this.onClick(e));
    }

    public onClick(event: MouseEvent): void {
        switch (event.button) {
            case 1:
                break;
        }
    }
}
