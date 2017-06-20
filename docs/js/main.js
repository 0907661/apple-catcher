var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gameobjects = (function () {
    function Gameobjects() {
        this.id = 0;
        this.speed = 0;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
    }
    Gameobjects.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Gameobjects;
}());
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple(g) {
        var _this = _super.call(this) || this;
        _this.applesOffScreen = 0;
        {
            _this.game = g;
            _this.div = document.createElement("apple");
            document.body.appendChild(_this.div);
            _this.startPosition();
        }
        return _this;
    }
    Apple.prototype.startPosition = function () {
        this.x = Math.random() * (window.innerWidth - 252);
        this.y = -300;
        this.width = 135;
        this.height = 147;
        this.speed = Math.floor(Math.random() * (50 - 30 + 1) + 30);
    };
    Apple.prototype.inBasket = function () {
        this.y = -300;
        this.speed = 0;
        this.div.remove();
    };
    Apple.prototype.offScreen = function () {
        this.y = -300;
        this.speed = 0;
        this.div.remove();
    };
    Apple.prototype.update = function () {
        this.y += this.speed;
        _super.prototype.update.call(this);
    };
    return Apple;
}(Gameobjects));
var Basket = (function (_super) {
    __extends(Basket, _super);
    function Basket(player) {
        var _this = _super.call(this) || this;
        {
            _this.div = document.createElement("basket");
            player.div.appendChild(_this.div);
            _this.x = 380;
            _this.y = -75;
            _super.prototype.update.call(_this);
        }
        return _this;
    }
    return Basket;
}(Gameobjects));
var Border = (function (_super) {
    __extends(Border, _super);
    function Border() {
        var _this = _super.call(this) || this;
        {
            _this.div = document.createElement("border");
            document.body.appendChild(_this.div);
            _this.startPosition();
        }
        return _this;
    }
    Border.prototype.startPosition = function () {
        this.width = innerWidth;
        this.height = 100;
        this.x = 0;
        this.y = (window.innerHeight - 100);
    };
    Border.prototype.update = function () {
        _super.prototype.update.call(this);
    };
    return Border;
}(Gameobjects));
var Collision = (function () {
    function Collision() {
    }
    Collision.prototype.collider = function (c1, c2) {
        return !(c2.x > c1.x + c1.width || c2.x + c2.width < c1.x || c2.y > c1.y + c1.height || c2.y + c2.height < c1.y);
    };
    Collision.prototype.borderCollide = function (c1, c2) {
        return !(c2.x > c1.x + c1.width || c2.x + c2.width < c1.x || c2.y > c1.y + c1.height || c2.y + c2.height < c1.y);
    };
    return Collision;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.updateNumber = 0;
        this.applesGone = 0;
        this.displayScore = new Score();
        this.collision = new Collision();
        this.player = new Player;
        this.apples = new Array();
        this.border = new Border();
        this.gameOver = false;
        setInterval(function () { return _this.pushApple(); }, 1000);
        this.appleInterval = setInterval(function () { return _this.updateApples(); }, 10);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Object.defineProperty(Game.prototype, "display", {
        get: function () {
            return this.displayScore;
        },
        set: function (value) {
            this.displayScore = value;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.pushApple = function () {
        if (this.apples.length < 20) {
            this.apples.push(new Apple(this));
        }
    };
    Game.prototype.updateApples = function () {
        if (this.apples.length < 20) {
            this.displayScore.scoreText = "Apples caught: " + this.displayScore.score;
        }
        else {
            if (this.displayScore.score == 20 && this.applesGone == 20) {
                this.displayScore.scoreText = "You've caught all the apples, well done!";
                this.endGame();
            }
            else if (this.displayScore.score !== 20 && this.applesGone == 20) {
                this.endGame();
            }
        }
    };
    Game.prototype.endGame = function () {
        this.gameOver = true;
        this.player.div.remove();
        clearInterval(this.appleInterval);
        this.restartButton = document.createElement("startButton");
        this.restartButton.className = "startButton";
        this.restartButton.innerText = "Restart";
        document.body.appendChild(this.restartButton);
        this.restartButton.addEventListener("click", function () {
            window.location.reload();
        });
        this.displayScore.scoreText = "You've managed to catch " + this.displayScore.score + " apples. Try to catch them all next time!";
    };
    Game.prototype.delay = function () {
        setTimeout(function () { return true; }, 3000);
    };
    Game.prototype.gameLoop = function () {
        this.updateGame();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.updateGame = function () {
        if (this.gameOver == false) {
            this.player.update();
            this.border.update();
            for (var _i = 0, _a = this.apples; _i < _a.length; _i++) {
                var e = _a[_i];
                e.update();
            }
            for (var _b = 0, _c = this.apples; _b < _c.length; _b++) {
                var b = _c[_b];
                if (this.collision.collider(b, this.player)) {
                    b.inBasket();
                    this.applesGone++;
                    this.display.updateScore(1);
                }
                else if (this.collision.borderCollide(b, this.border)) {
                    b.offScreen();
                    this.applesGone++;
                }
            }
        }
        else {
            for (var _d = 0, _e = this.apples; _d < _e.length; _d++) {
                var e = _e[_d];
                e.update();
            }
        }
        this.display.update();
    };
    return Game;
}());
window.addEventListener("load", function () {
    new StartGame();
});
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        {
            _this.div = document.createElement("player");
            _this.div.className = "flipped";
            document.body.appendChild(_this.div);
            _this.basket = new Basket(_this);
            _this.startPosition();
            window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
            window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        }
        return _this;
    }
    Player.prototype.startPosition = function () {
        this.width = 854;
        this.height = 357;
        this.x = (window.innerWidth / 2 - 175);
        this.y = (window.innerHeight - 450);
    };
    Player.prototype.update = function () {
        var targetX = this.x - this.leftSpeed + this.rightSpeed;
        if (targetX > 0 && targetX + 300 < window.innerWidth)
            this.x = targetX;
        _super.prototype.update.call(this);
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 65:
                this.leftSpeed = 75;
                break;
            case 68:
                this.rightSpeed = 75;
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
    };
    return Player;
}(Gameobjects));
var Score = (function () {
    function Score() {
        this.div = document.getElementsByTagName("ui")[0];
        this.score = 0;
    }
    Score.prototype.updateScore = function (applesCaught) {
        this.score += applesCaught;
    };
    Score.prototype.display = function () {
        this.div.innerHTML = this.scoreText;
    };
    Score.prototype.update = function () {
        this.display();
    };
    return Score;
}());
var Start = (function () {
    function Start() {
        var _this = this;
        window.addEventListener("click", function (e) { return _this.onClick(e); });
    }
    Start.prototype.onClick = function (event) {
        switch (event.button) {
            case 1:
                break;
        }
    };
    return Start;
}());
var StartGame = (function () {
    function StartGame() {
        this.button = document.createElement("button");
        this.button.className = "startButton";
        document.body.appendChild(this.button);
        this.button.addEventListener("click", function () {
            new Game();
            this.remove();
        });
        this.score = document.getElementsByTagName("ui")[0];
        this.score.innerHTML = "Try to catch all 20 apples!";
        this.button.innerText = "Start game!";
    }
    return StartGame;
}());
//# sourceMappingURL=main.js.map