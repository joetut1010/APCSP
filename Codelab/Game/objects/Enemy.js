function Enemy(x, y, team) {

    // explicity reference to self
    // https://alistapart.com/article/getoutbindingsituations
    var self = this;

    // public properties
    self.x = x;
    self.y = y;
    self.team = team;
    self.r = 50



    // private properties
    var speed = 50;
    var body = color(255, 0, 0); // red

    // public functions
    self.control = function () {
        move();
        display();
    }

    // private functions
    function move() {
        if (self.y > height + 2 * self.r) {
            self.y = random(-50, -250);
        }
        self.y += speed;
    }

    function display() {
        fill(body);
        ellipse(self.x, self.y, self.r, self.r);
    }
}
