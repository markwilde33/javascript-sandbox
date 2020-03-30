// filter method
// use the filter() method to create a new array with all the elements that pass the test implemented by the callback() function.
const scores = [10, 30, 15, 25, 40, 5];

const filteredScores = scores.filter(score =>{
  return score > 20;
});

console.log(filteredScores);

const folks = [
  {name: 'Yen', sorceress: true},
  {name: 'Geralt', sorceress: false},
  {name: 'Dandelion', sorceress: false},
  {name: 'Triss', sorceress: true}
];

// const filterFolks = folks.filter(folk => {

//   return folk.sorceress;
// });

// shortened
const filterFolks = folks.filter(folk => folk.sorceress);

console.log(filterFolks);

// <----------------------------------------------------------------------------->

// map method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
// use the map() method to create an array by calling a specific function on each element present in the parent array. 

const salesPrices = prices.map(price =>  price / 2);

console.log(salesPrices);


const fruits = [
  {name: 'banana', price: 20},
  {name: 'apple', price: 25},
  {name: 'lime', price: 40},
  {name: 'peach', price: 35},
  {name: 'orange', price: 10}
];

const saleFruits = fruits.map(fruit => {
  if(fruit.price > 30){
    return {name: fruit.name, price: fruit.price / 2};
  } else {
    return fruit;
  }
});

console.log(saleFruits);