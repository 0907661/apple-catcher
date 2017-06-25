/// <reference path="gameobjects.ts"/>

class Basket extends Gameobjects {

    constructor(player: Player){
        super(); {
            this.div = document.createElement("basket");
            player.div.appendChild(this.div);

            this.x = 50;
            this.y = -24;

            super.update();
        }
    }
}
