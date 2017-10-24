var scan = require('readline-sync')
var readLine = scan.question;
var readInt = scan.questionInt;
var readfloat = scan.questionFloat;

var phrase = readLine('Enter a phrase: ');
//var phrase2 = readLine('the');

//replace
console.log(phrase.replace('hte', 'the'));


/*

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
console.log(phrase.replace('hte', 'the'));]

//split
console.log(phrase.split('  '));

// trim- removes leading and trailing whitespace
console.log(phrase.trim());


*/
