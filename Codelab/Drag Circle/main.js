var c1
var bg;

function setup() {
    createCanvas(1000, 1000);
    bg = color(200);
    c1 = new dCircle(50, 50, 50);

}

function draw() {
    background(bg);
    c1.display();

}

function dCircle(x, y, r) {

    //explicit reference to self
    var self = this;

    //public on the "class"
    self.x = x;
    self.y = y;
    self.r = r;

    //private stuff
    var dragging = false;


    self.display = function () {


        var d = dist(self.x, self.y, mouseX, mouseY);

        // we need to drag when mouse is down
        if (mouseIsPressed && d < r) {

            fill(300, 300, 300);
            dragging = true;

        }
        if (dragging) {
            self.x = mouseX;
            self.y = mouseY;
        }

        if (!mouseIsPressed) {
            fill(200, 200, 200);
            dragging = false;
            self.x = self.x
            self.y = self.y

        }

        ellipse(self.x, self.y, self.r, self.r);
    }


}
