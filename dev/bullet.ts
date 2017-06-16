/// <reference path="basket.ts"/>

class Bullet extends Basket {

    private xspeed:number;
    private yspeed:number;

    constructor(){
        super();{
            this.div = document.createElement("block");
            document.body.appendChild(this.div);
            
            this.xspeed = -1;
            this.yspeed = 1;

        }
    }

    public move():void {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
} 