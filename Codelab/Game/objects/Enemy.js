function Enemy(x, y) {

    Sprite.call(this, x, y);
    // explicity reference to self
    // https://alistapart.com/article/getoutbindingsituations
    var self = this;

    // public properties
    this.x = x;
    this.y = y;
    this.r = 20

    // private properties
   this.speed = 50;
    this.body = color(255, 0, 0); // red

    // public functions
}

    // private functions
Enemy.prototype.move = function() {
}

Enemy.prototype.display = function() {
    fill(this.body);
    ellipse(this.x, this.y, this.r, this.r);
    }
Enemy.prototype.control = function () {
    this.move();
    this.display();
}
