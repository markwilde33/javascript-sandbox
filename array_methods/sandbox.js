// use the filter() method on the array to return and omit items
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