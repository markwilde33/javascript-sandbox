// function declaration
greet();


function greet(){
    console.log('hello Clarice');
}

greet();

// function expression
const speak = function(){
    console.log('hello Chantice');
};

speak();

console.log('');

/* Hoisting, we can hoist function declarations,
 so we can call them from anywhere.
 We can't hoist function expressions,
 so we must call them after the function code block. 
 Hoisting is generally bad practice with few use cases.*/

 // arguments and parameters

const talk = function(name = 'patsy', time = 'evening'){
  console.log(`good ${time} ${name}`);
}

talk('sparky', 'morning');
talk('sparky');
talk();

// const calcArea = function(radius){
//   return 3.14 * radius**2
// };

// const area = calcArea(3);
// console.log(calcArea(5));



//arrow function -- modern way to write functions
// const calcArea = (radius) => {
//   return 3.14 * radius**2;
// };
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(3);
console.log(calcArea(5));

const learn = () => 'hello, mr moomoo';
const mearn = learn();
console.log(mearn);


// const bill = (products, tax) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
};

const total = bill([10,15,30], 0.2);
console.log(total);


const id = 'buddha';

//functions

const sayHi = () => 'hello';

let res1 = sayHi();
console.log(`${res1} you fool, I love you`);
console.log( res1 + ' shit\'s it');

// methods
let res2 = id.toUpperCase();
console.log(res2);

// callbacks & functions

const myFunct = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};

myFunct(value => {
  // do something
  console.log(value);
});

// callbacks & foreach

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hi ${person}`)
}


people.forEach(logPerson);

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`)
  callback();
}

doHomework('math', function(){
  alert('Finished my homework');
});