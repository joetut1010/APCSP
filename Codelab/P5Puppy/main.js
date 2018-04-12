function setup() {
    createCanvas(640, 480);

}

function draw() {
    background('#FFFAED');
    var x = width / 2;
    var y = height / 2;

    //face
    noStroke();
    fill('#800080');
    ellipse(x, y, 200, 400);


    //nose
    fill('#FFA500');
    ellipse(x, y + 60, 64, 100);

    //eyeleft
    fill('#FFFFFF');
    ellipse(x + 42, y - 26, 64, 64);

    //pupilright
    fill('#0000FF');
    ellipse(x + 42, y - 26, 15, 40);

    //eyeright
    fill('#FFFFFF');
    ellipse(x - 42, y - 50, 64, 64);

    //pupilleft
    fill('#00FF00');
    ellipse(x - 42, y - 50, 15, 40);

    // earleft
    fill('#800000');
    push();
    translate(x - 100, y - 150);
    rotate(-Math.PI / 4);
    ellipse(0, 0, 52, 92);
    pop();

    // earright
    fill('#FF0000');
    push();
    translate(x + 100, y - 150);
    rotate(Math.PI / 4);
    ellipse(0, 0, 52, 92);
    pop();

    //tounge
    fill('#EE3E36');
    arc(x - 20, y_80, 40, 70, 0, PI_QUARTER_PI, CHORD);

}
