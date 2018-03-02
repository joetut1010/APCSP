function Sprite(x, y, team) {
    this.x = x;
    this.y = y;
    this.team = team;
}

Sprite.prototype.handleCollision = function () {
    var index = sprites.indexOf(this);
    if (index !== -1) {
        sprites.splice(index, 1);
    }
}

Sprite.prototype.isColliding = function (other) {
    var d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r ? true : false;
}

Sprite.prototype.control = function () {
    this.move();
    this.display();
}
