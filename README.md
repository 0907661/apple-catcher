# Een kip op een vlot - completed

![Chickens](docs/images/fireatwill.png?raw=true "Fire at will")

## Opdracht 1

- Maak meerdere vloten aan in game.ts
- Plaats op elk vlot een random aantal kippen
- Het HTML element van de kip append je aan het HTML element van het vlot
- De kippen komen op de x as netjes naast elkaar te staan
- Game roept de update functie van de vloten aan. 
- Een vlot roept de update functie van zijn kippen aan.

## Opdracht 2

- We gaan de kip bewapenen. Geef de kip een `click` event listener.
- Bij een muisklik krijgt de kip een gun: `this.gun = new Gun();`
- De gun heeft een `public fire(){}` functie.
- Als je op de kip klikt terwijl hij al een gun heeft, dan roep je de `fire()` functie van de gun aan. Gebruik console.log om te zien of alles werkt.

## Opdracht 3

De gun vuurt kogels af. Deze kogels moeten in beeld blijven als de kip en de gun weg zijn. Daarom voegen we de bullets toe aan de main game, en niet aan de gun. De bullets staan op hetzelfde niveau als de rafts. 

**game.ts**

- Game.ts krijgt een array voor de bullets.
- Game.ts roept de `move` functie van de bullets aan.
- Game.ts heeft een `public addBullet()` functie waarmee je kogels aan de array kan toevoegen. 

**gun.ts**

- De `fire()` functie in Gun.ts maakt een nieuwe bullet aan: `let b:Bullet = new Bullet(x,y);`
- In gun.ts moet een verwijzing bestaan naar de main game zijn. De bullet geef je vervolgens door met `this.game.addBullet(b);`
- De bullet moet de x en y positie van de kip op het vlot weten, om op de goede plek gezet te worden. Zie voorbeeldcode!

## UML

![UML](docs/images/uml.png?raw=true "UML")

### Voorbeeldcode

#### Verwijzingen doorgeven

Via de constructor kan je een verwijzing naar de game doorgeven aan zijn children. Dit is handig als een child een functie van de game moet kunnen aanroepen. In dit voorbeeld zie je hoe de Chicken de gameOver functie van Game kan aanroepen:
```
class Game {
    constructor(){
        let raft = new Raft(this);
    }
    public gameOver(){
        console.log("game over man!");
    }
}
class Raft {
    private game:Game;
    constructor(g:Game){
        this.game = g;
        let chicken = new Chicken(this.game);
    }
}
class Chicken {
    private game:Game;
    constructor(g:Game){
        this.game = g;
        this.game.gameOver();
    }
}
```

#### Click Listener
```
this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
```

#### Check of een object al bestaat
```
this.gun = new Gun();

if(this.gun){
    console.log("De kip heeft al een gun!");
}
```

#### De absolute positie van een DOM element

Als je van het gun element de x en y positie opvraagt, dan krijg je de relatieve positie ten opzichte van de kip. Als je wil weten waar de gun staat ten opzichte van het browservenster, dan kan je werken met [getBoundingClientRect()](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect).

```
// de globale positie van de gun opvragen
let rect:ClientRect = this.div.getBoundingClientRect();

// de positie van de gun aan de bullet geven 
let bullet = new Bullet(rect.left, rect.top);
```

### Theme Song

[Chicken on a raft](http://chickenonaraft.com)
