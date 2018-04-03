function Bullet(x, y, team, vector = 0) {

    Sprite.call(this, x, y, team); 
    this.vector = vector;
    
}

Bullet.prototype = Object.create(Sprite.prototype);  
Bullet.prototype.constructor = Bullet;
Bullet.prototype.r = 10;

Bullet.prototype.move = function(){
    if (this.vector != 0) {
        this.y += this.vector.y;
        this.x += this.vector.x;
    } else {
       this.y -= 10; 
    }
    }
    
Bullet.prototype.display = function(){
    if(this.y < 0 || this.y > height){
        var index = _sprites.indexOf(this);
        _sprites.splice(index, 1);
    }
        fill(255,0,0);
        ellipse(this.x, this.y, this.r, this.r);
}
    


/*function Bullet(x, y, team) {
    var self = this;
    self.x = x;
    self.team = team;
    self.r = 50

    // private properties
    var speed = 100;
    var body = color(255, 0, 0); // red

    // public functions
    self.control = function () {
        move();
        display();
    }
    self.x += speed;
}

function move() {
    if (self.y > height + 2 * self.r) {
        self.y = random(-50, -250);
    }
    self.y += speed;
}

function display() {
    fill(body);
    ellipse(self.x, self.y, self.r, self.r);
    setInterval(100);
}

*/
