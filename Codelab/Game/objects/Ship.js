function Ship(x1, y1, x2, y2, x3, y3, team) {

    //explicit reference to this
    Sprite.call(this, x1, y1, team);

    var self = this;
    //public on the "class"

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x = (this.x2 + this.x1) / 2;
    this.y = this.y3 - (this.y3 - this.y2) / 2;
    this.r = 25;
    this.team = team;
    this.canFire = true;
    //this.delay = 250;
}

Ship.prototype = Object.create(Sprite.prototype);
Ship.prototype.constructor = Ship;


Ship.prototype.move = function () {
    var SPACE_BAR = 32;
    this.speed = 5;

    if (keyIsDown(LEFT_ARROW)) {
        this.x  -= this.speed;
        this.x1 -= this.speed;
        this.x2 -= this.speed;
        this.x3 -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        this.x  += this.speed;
        this.x1 += this.speed;
        this.x2 += this.speed;
        this.x3 += this.speed;
    }

    if (keyIsDown(UP_ARROW)) {
        this.y  -= this.speed;
        this.y1 -= this.speed;
        this.y2 -= this.speed;
        this.y3 -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        this.y  += this.speed;
        this.y1 += this.speed;
        this.y2 += this.speed;
        this.y3 += this.speed;
    }
    if (keyIsDown(SPACE_BAR)) {
        if (this.canFire)
            this.fire();
    }
}

Ship.prototype.fire = function () {
    var self = this;
    self.canFire = true;
    if(self.canFire){
        self.canFire = false;
        _sprites.push(new Bullet(this.x3, this.y3, 1));
        setTimeout(function(){
            self.canFire = true;
            }, 150);  
    }
}


Ship.prototype.display = function () { 
    fill(100);
    noStroke();
    ellipse(this.x, this.y, 2*this.r, 2*this.r);
    fill(color(255, 0, 185));
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
}

Ship.prototype.control = function () {
    this.move();
    this.display();
}





