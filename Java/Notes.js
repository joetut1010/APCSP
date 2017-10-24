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

// for loop
for (var i = 0; i < word.length; i += 3) {
    console.log(word.charAt(i));
}

var b = parseint(1.0);
var c = parseint(2.0);
console.log(parseInt(b / c));

//arrays - note in a sqaure bracket notation

var c = [1, 2, 3, 4, 6, 7, 8, 9, 10]

for (var i = 0; i < c.length; i++) {
    sum += c[i] // here we access the index at position 
}
