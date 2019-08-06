//move the process of creating canvas here to fix the ctx 'undefined' problem
(function initCanvas(){
    var doc = window.document,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d');

    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    window.canvas = canvas;
    window.ctx = ctx;

})();


// Enemies class
var Enemy = function(x,y,v) {
    // Variables:
    //image resource, start location, start velocity
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.start = x;
    this.x = x;
    this.y = y;
    this.v = v;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//dt is used in engine.js, here it has no use.
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.v;

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    //todo ctx has not defined problem.

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    this.x > canvas.width? this.x = this.start : this.x = this.x;


};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function () {

}

player.prototype.update = function () {

}

player.prototype.render = function () {

}

player.prototype.handleInput = function () {

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

var enemy1 = new Enemy(-10,60,2);
var enemy2 = new Enemy(-100,60,4);
var enemy3 = new Enemy(-60,145,5);
var enemy4 = new Enemy(-200,230,2);

allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);


var player = new player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
