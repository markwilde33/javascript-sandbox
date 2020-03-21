// document object model

// get elements by query selector -- the most practical method type, as we can use methods such as forEach directly on the returned values, as opposed to HTML collections; which don't have this functionality, Stick to the querySelector(s) method(s) as a rule of thumb

const para = document.querySelector('p');

console.log(para);

const error = document.querySelector('.error');

console.log(error);

const error_two = document.querySelector('div.error');

console.log(error_two);

const paras = document.querySelectorAll('p');

console.log(paras);
console.log(paras[1]);

paras.forEach(para => {
  console.log(para);
});

console.table(paras);
console.log(paras);

const errors = document.querySelectorAll('.error');

console.log(errors);


// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);


// get elements by their tag name

const parTags = document.getElementsByTagName('p')
console.log(parTags);
console.log(parTags[3]);