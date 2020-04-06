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
