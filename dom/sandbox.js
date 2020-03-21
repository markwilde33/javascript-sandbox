// document object model

// get elements by query selector -- the most practical method type, as we can use methods such as forEach directly on the returned values, as opposed to HTML collections; which don't have this functionality, Stick to the querySelector(s) method(s) as a rule of thumb

// const para = document.querySelector('p');

// console.log(para);

// const error = document.querySelector('.error');

// console.log(error);

// const error_two = document.querySelector('div.error');

// console.log(error_two);

// const paras = document.querySelectorAll('p');

// console.log(paras);
// console.log(paras[1]);

// paras.forEach(para => {
//   console.log(para);
// });

// console.table(paras);
// console.log(paras);

// const errors = document.querySelectorAll('.error');

// console.log(errors);


// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);


// get elements by their tag name

// const parTags = document.getElementsByTagName('p')
// console.log(parTags);
// console.log(parTags[3]);


// Make changes in the DOM using various methods


// target and change the inner text of the p selector
const para = document.querySelector('p');
console.log(para.innerText);

para.innerText = 'ninjas are awesome!';
console.log(para.innerText);

const paras = document.querySelectorAll('p');
// loop through the p selectors inner text and add some text to each instance
paras.forEach(para => {
  console.log(para.innerText);
  para.innerText += ' new text here';
});

// target and change the inner html of the content class
const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = "<h3> Look at me, I'm an h3! </h3>";
console.log(content.innerHTML);

//  add additional <p> elements to the div with the class of content 
const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});

