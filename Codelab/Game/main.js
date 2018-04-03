var bg;

var _sprites = [];
var _player;


function setup() {
    createCanvas(800, 600);
    bg = color(100);
    _player = new Ship(400, 580, 440, 580, 420, 535, 1);
    _sprites.push(_player);
    
    
    _sprites.push(new RainDropShooter(500, 0, 2));
    _sprites.push(new RainDropShooter(200, 0, 2));
     
    
    _sprites.push(new RainDropEnemy(100, -950, 2));
    _sprites.push(new RainDropEnemy(200, -100, 2));
    _sprites.push(new RainDropEnemy(300, 0, 2));
    _sprites.push(new RainDropEnemy(400, -950, 2));
    _sprites.push(new RainDropEnemy(500, -400, 2));
    _sprites.push(new RainDropEnemy(600, -1100, 2));

}

function draw() {
    background(bg);
    for(var i = 0; i < _sprites.length; i++) {
        _sprites[i].control();
        for(var j = 0; j < _sprites.length; j++){
            if(_sprites[i] && _sprites[j]){
                checkCollisions(_sprites[i], _sprites[j]);
            }
        }
    }

}

function checkCollisions(a,b){
    if(a.isColliding(b) && a.team !== b.team){
        a.handleCollision();
        b.handleCollision();
        
    }
}


    

