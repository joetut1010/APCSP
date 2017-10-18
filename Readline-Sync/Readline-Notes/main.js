var scan = require('readline-sync')
var readLine = scan.question;
var readInt = scan.questionInt;
var readfloat = scan.questionFloat;

var phrase = readLine('enter a phrase ')
var phrase2 = readLine("what the phrase ")


//length
console.log(phrase.length);

//charAt
console.log(phrase.charAt(1));

//substring 
console.log(phrase.substring(6));
console.log(phrase.substring(4, 8));

//indexOf - useful for search
console.lof(phrase.indexOf('cat'));

//replace
console.log(phrase.replace('cat', 'dog'));]

//split
console.log(phrase.split('  '));

// trim- removes leading and trailing whitespace
console.log(phrase.trim());
