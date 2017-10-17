var readlineSync = require('readline-sync');
var readInt = readlineSync.questionInt;
var readFloat = readlineSync.questionFloat;
var readLine = readlineSync.question;

var length = readFloat("length: ");

var width = readFloat("width: ");

var radius = 0;

if (width < length) {
    radius = width;

} else {
    radius = length;
}

var area = radius * radius * Math.PI;

var quarterCircle = area / 4;

quarterCircle *= 2;

var answer = quarterCircle / (width * length);
console.log(answer);
