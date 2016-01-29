// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //col * 101, row * 83
    this.x = x * 100;
    this.y = y * 75;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers
    this.x = this.x + (100 * dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    // 0, 100, 200, 300, 400
    this.x = 200;
    // 0, 80, 160, 240, 320, 400
    this.y = 400;
};

Player.prototype.update = function() {
    this.render();
    if (this.y == 0) {
        this.x = 200;
        this.y = 400;
    }
    this.render();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
};

Player.prototype.handleInput = function(key){
    var bounds = [0, 400];
    var newVal = function(eq) {
        return (eq >= 0 && eq <= 400);
    }
    switch(key) {
        case 'left':
            var newVal = newVal(this.x - 100);
            if (newVal) {
                this.x -= 100;
            };
            break;
        case 'up':
            var newVal = newVal(this.y - 80);
            if (newVal) {
                this.y -= 80;
            };
            break;
        case 'right':
            var newVal = newVal(this.x + 100);
            if (newVal) {
                this.x += 100;
            };
            break;
        case 'down':
            var newVal = newVal(this.y + 80);
            if (newVal) {
                this.y += 80;
            };
            break;
    }
    this.update();
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = new Array();
allEnemies.push(new Enemy(0,1));
// allEnemies.push(new Enemy(0,2));
allEnemies.push(new Enemy(0,3));

// allEnemies.push(new Enemy(1,0));
// allEnemies.push(new Enemy(1,1));
allEnemies.push(new Enemy(1,2));
allEnemies.push(new Enemy(1,3));
// allEnemies.push(new Enemy(1,4));

allEnemies.push(new Enemy(2,1));
allEnemies.push(new Enemy(2,2));
// allEnemies.push(new Enemy(2,3));


allEnemies.push(new Enemy(-1,1));
allEnemies.push(new Enemy(-2,2));
allEnemies.push(new Enemy(-3,3));

var player = new Player();


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

