// store data in local storage
localStorage.setItem('name', 'flipper')
localStorage.setItem('age', 100)

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log([name, age]);


// update data
localStorage.setItem('name', 'luigi');
localStorage.age = '200';
name=localStorage.getItem('name');
age=localStorage.getItem('age');

console.log([name, age]);


// delete data from local storage
// localStorage.removeItem('name');
localStorage.clear();
name=localStorage.getItem('name');
age=localStorage.getItem('age');
console.log(name);

// stringifying & parsing data
const todos = [
  [
    {"text": "play dark souls", "author": "santa claus"},
    {"text": "play civ IV", "author": "sid meier"},
    {"text": "play my little pony", "author": "freddy kruger"}
  ]     
];
//log to console
console.log(JSON.stringify(todos));

// stringify and store in localStorage
localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

// parse and output array to console
console.log(JSON.parse(stored));

