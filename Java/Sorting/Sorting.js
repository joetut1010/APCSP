var scan = require('readline-sync')
var readLine = scan.question;
var readInt = scan.questionInt;
var readfloat = scan.questionFloat;

var len = readInt("Enter the length of the sequence: ");
var arr = new Array(len);
var x = 0;

for (var i = 0; i < len; i++) {    
    arr[i] = readInt("Number " + (1 + i) + ": ");
}

for (var i = 0; i < len + 1; i++) {    
    if (arr[i] < arr[i - 1] && i != 0) {        
        x += 1;    
    }
}

console.log(x);
