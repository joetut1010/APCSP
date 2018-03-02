function Bullet(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 50;
}

Bullet.prototype = Object.create(Sprite.prototype);
Bullet.prototype.constructor = Bullet
Bullet.prototype.r = 40;

//
Bullet.prototype.move = function () {
    this.y -= this.speed;
    if (this.y < 0) {
        console.log('destroy');
        this.handleCollision();
    }
}

Bullet.prototype.display = function () {
    fill(255, 255, 0);
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
