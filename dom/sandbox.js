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
// const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText = 'ninjas are awesome!';
// console.log(para.innerText);

// const paras = document.querySelectorAll('p');
// loop through the p selectors inner text and add some text to each instance
// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text here';
// });

// target and change the inner html of the content class
// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = "<h3> Look at me, I'm an h3! </h3>";
// console.log(content.innerHTML);

//  add additional <p> elements to the div with the class of content 
// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });


// Use get and set attributes to change attributes of a selector
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://non-duality.rupertspira.com/home')
// link.innerText = 'Rupert has his say';

// Use get and set attributes to change values of a class
// const message = document.querySelector('p');
// console.log(message.getAttribute('class'));
// message.setAttribute('class', 'flip-mo-squad');

// create a style property where none already exists
// message.setAttribute('style', 'color: pink')


// const titleTwo = document.querySelector('h2');
// adds the style property margin-bottom, but overrides any other style properties linked to the selected element.
// titleTwo.setAttribute('style', 'margin-bottom: 50px;');


// handy wat to view all the styles available and the camel case versions of double barrel style names
// console.log(titleTwo.style);
// console.log(titleTwo.style.color);

// Add or overwrite styles without overriding any other style properties
// titleTwo.style.padding = '50px';
// titleTwo.style.color = 'crimson';
// titleTwo.style.fontSize = '1.5em';

// assign p to a variable, output the classes associated with p, add a class to p, remove a class from p
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// get all p tags and set them to the paras variable, use the forEach method to target certain text content in the paragraphs and add class styles when the text is present
// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   if(p.textContent.includes('error')){
//     p.classList.add('error');
//   }
//   if(p.textContent.includes('success')){
//     p.classList.add('success');
//   }
// });

// toggle a class on and off, add the class test on toggle, remove the class test on toggle
// const name = document.querySelector('.name');

// name.classList.toggle('test')
// name.classList.toggle('test')



// parents, children & siblings
// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));     

// get an array from the html collection and add a class to each element
// Array.from(article.children).forEach(child => {
//   child.classList.add('article-element');
// });


// find the parent of an element using .parentElement, can string together to move uo the DOM tree, useful if you don't know what the parent elements are
// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);

// find the next sibling of an element using .nextElementSibling
// console.log(title.nextElementSibling);

// find the previous sibling of an element using .previousElementSibling
// console.log(title.previousElementSibling);

// more chaining 
// console.log(title.previousElementSibling.parentElement.children);


// use .addEventListener to output a message when the button is clicked
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });


// cycle through a list of items and use the event listener to add a style on click
// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {

    // console.log('List item has been clicked!, who dares click my items? speak! SPEAK!!')
    // console.log(e);

    // shows which element is being targeted by the event listener
    // console.log(e.target);
    // console.log(item);
    // add a style to an item on click
    // e.target.style.textDecoration = 'line-through';
     // remove the  element targeted by the event listener
//      e.target.remove();
//   })
// });


// Create a new list item in the ul when the button is clicked and append it to the bottom of the list
// const ul = document.querySelector('ul');

// const buttons = document.querySelector('button');

// buttons.addEventListener('click', () => {
//     //option 1
//     // ul.innerHTML += '<li>something new to do</li>'
//     //option 2
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // put at the bottom of the list
//     ul.append(li);
//     // put at the top of the list
//     // ul.prepend(li);
// });


// event bubbling

// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.textContent = ' this is a new list item';
//   ul.append(li);
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', event => {
//   event.target.style.backgroundColor = 'red';
//   console.log('this is an event in the LI element');
//   // use this method to stop the event from bubbling up to the parent element
//   event.stopPropagation();
//   });
// });
// added a simple event to the ul to show event bubbling in action, when an li event is triggered the event 'bubbles up'  to the parent ul element and also fires the ul event automatically
// ul.addEventListener('click', event => {
//   console.log('this is an event in the UL element');
// })



// event delegation 
// When an li item is clicked, although it has no event listener itself, the click event bubbles up to the parent element ul; as the ul does have an event listener, the item will be output to the console when the ul event fires, as it's a child of the ul
// This is very useful when dynamically adding elements as they will be controlled by the parent element event listener. in this example new li elements wouldn't of been included in the forEach loop as they were added after the loop fired. by using event delegation these new li items are dynamically controlled by the parent event listener and are treated the same as the original li items
// ul.addEventListener('click', event => {
//   console.log(event.target);
//   if(event.target.tagName === 'LI'){
//   event.target.remove()
//   }
// });

//common event types

// fire the callback function when a user attempts to copy the text in the div with the class of copy-me
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  alert('OI!, get your own content, you crazy fool!')
});


// fire the callback function when a user scrolls over the div with a class of box, output the mouse pointer coordinates 
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x position: ${e.offsetX} y position: ${e.offsetY}`;
});

// fire the callback function when a user wheel scrolls over the document, output the mouse pointer coordinates 
document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
})