var scan = require('readline-sync')
var readLine = scan.question;
var readInt = scan.questionInt;
var readfloat = scan.questionFloat;

var phrase = readLine("enter a phrase ")

var t = '';
for (var i = 0; i < phrase.length + 4; i++) {
    t += "*";
}

var s = '';
for (var i = 0; i < phrase.length = 2; i++) {
    s += '  ';
}

console.log(t);
console.log('*' + s + '*');
console.log('* ' + s + ' *');
console.log(t);
