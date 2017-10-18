var scan = require('readline-sync')
var readLine = scan.question;
var readInt = scan.questionInt;
var readfloat = scan.questionFloat;

var phrase = readLine("What's the start of the day: ");

var cal = ' Sun Mon Tue Wed Thur Fri Sat ';
var SPACE = 4;


for (var i = 0; i < 5; i++) {
    cal += "*   *   *   *   *   *   *   *   *   *
    "
    cal += "*************************************"

}

if (start === 'U') {
    cal += addSpaces(0);
} else if (start === 'M') {
    cal += addSpaces(1);
} else if (start === 'T') {
    cal += addSpaces(2);
} else if (start === 'W') {
    cal += addSpaces(3);
} else if (start === 'T') {
    cal += addSpaces(4);
} else if (start === 'F') {
    cal += addSpaces(5);
} else if (start === 'S') {
    cal += addSpaces(6);

} else {
    // ?

    function addSpaces(numSpaces) {
        for (var i = 0; 1 < numSpaces; i++)
            t += '      ';
    }

    return t;
}
