function Ship(x1, y1, x2, y2, x3, y3, team) {

    var self = this;
    self.x1 = x1;
    self.y1 = y1;
    self.x2 = x2;
    self.y2 = y2;
    self.x3 = x3;
    self.y3 = y3;
    self.c = color(255, 0, 185);
    self.speed = 5;
    self.team = team;

    self.control = function () {
        keyboard();
        display();
    }

    function keyboard() {
        var SPACE_BAR = 32;

        if (keyIsDown(LEFT_ARROW)) {
            self.x1 -= self.speed;
            self.x2 -= self.speed;
            self.x3 -= self.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            self.x1 += self.speed;
            self.x2 += self.speed;
            self.x3 += self.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            self.y1 -= self.speed;
            self.y2 -= self.speed;
            self.y3 -= self.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            self.y1 += self.speed;
            self.y2 += self.speed;
            self.y3 += self.speed;
        }
        if (keyIsDown(SPACE_BAR)) {
            self.fire();
        }
    }

    self.fire = function () {
        sprites.push(new Bullet(self.x1, self.y1, self.team));
    }

    function display() {
        fill(self.c);
        triangle(self.x1, self.y1, self.x2, self.y2, self.x3, self.y3);
    }
}
