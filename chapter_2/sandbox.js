// strings
console.log('hello, world');

let email = 'tutsy@tutsyworld.eu'
console.log(email);

// string concatenation
let firstName = 'Jimmy';
let lastName = 'Rose'

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length);


// string methods
console.log(fullName.toUpperCase());
let result = fullName.toUpperCase();
console.log(result);

console.log(result +' '+ lastName)
console.log(result, fullName)

let index = email.indexOf('@');
console.log(index);

// common strings

let $email = 'sharni@outback.au'
// get the last instance of a character
let $result = $email.lastIndexOf('a');

console.log($result);

// slice the string get the characters specified in the arguments 
let $result1 = $email.slice(0,9);

console.log($result1);

// start at a character from there go the set amount of characters forwards
let $result2 = $email.substr(3,3);
let $result3 = $email.substr(5,6);

console.log($result2);
console.log($result3);

// replace a character with another character

let $result4 = $email.replace('a','u');

console.log($result4);

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %

console.log(10 / 2);
let $result5 = radius % 3;

console.log($result5);

let $result6 = pi * radius**2

console.log($result6);

// order of operation - B I D M A S

let $result7 = 5 * (10-3)**2;
console.log($result7);

let likes = 10;
// shorthand
likes++
likes--;


// longhand
likes = likes + 1


// add/etc a value to the current total
likes += 10;
likes -= 10;
likes *= 10;
likes /= 10;
console.log(likes);

// NaN - not a number

console.log(5/ 'fish');

let fish = 'the blog has ' + likes+ ' likes';

console.log(fish);


// template strings
const title = 'Best reads of 2020'
const author = 'Clarice';
const $likes = 99;

// concatenation way
let $result8 = 'the blog called ' + title + ' by ' + author + ' has ' + $likes + ' likes';
console.log($result8);

// template string way
let $result9 = `The blog called ${title} by ${author} has ${$likes} likes`;
console.log($result9);

// creating html templates
let html =  `
<h2>${title}</h2>
<p>By ${author}<?p>
<span>This blog has ${$likes}<span>
`;
console.log(html);