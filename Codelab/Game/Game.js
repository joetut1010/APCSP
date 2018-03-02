function enimes(w, h, r, r) {

    var self = this;
    var w = w;
    var h = h;
    var r = r;
    var r = r;
    var c = color(255, 0, 185);
    var speed = 5;

    self.control = function () {
        keyboard();
        display();
    }

    function keyboard() {
        var SPACE_BAR = 32;

        if (keyIsDown(LEFT_ARROW)) {
            x1 -= speed;
            x2 -= speed;
            x3 -= speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            x1 += speed;
            x2 += speed;
            x3 += speed;
        }
        if (keyIsDown(UP_ARROW)) {
            y1 -= speed;
            y2 -= speed;
            y3 -= speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            y1 += speed;
            y2 += speed;
            y3 += speed;
        }
    }

    function display() {
        fill(c);
        triangle(x1, y1, x2, y2, x3, y3);
    }
}
