var bg;
var c1;

// array: all the sprites in the game
var sprites = [];
Ship.canFire = true;

//PLAYER
var player;

function setup() {
    createCanvas(2850, 1400);
    bg = color(100);
    c1 = new Ship(600, 600, 640, 600, 620, 560);
    player = new Ship(width / 2, height - 100);
    sprites.push(player);
    sprites.push(c1);


    //ENIMES
    for (var i = 0; i < 7; i++) {
        var randomX = random(50, width - 50);
        var randomY = random(-50, -2000);
        sprites.push(new Enemy(randomX, randomY));
    }
}

function draw() {
    background(bg);

    // for each sprite:
    for (var i = 0; i < sprites.length; i++) {
        // control it
        sprites[i].control();
    }
}
