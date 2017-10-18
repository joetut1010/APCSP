var readlineSync = require('readline-sync');
var readInt = readlineSync.questionInt;
var readFloat = readlineSync.questionFloat;
var readLine = readlineSync.question;

var a = readInt("enter a Number: ");
var b = readFloat("enter another number: ");
var c = readLine("enter any number: ");
console.log(a + b);

var pi = readFloat("what is pi? ")
