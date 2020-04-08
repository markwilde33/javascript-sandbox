//get a reference to the ul element
const list = document.querySelector('ul');

// function to get data from each recipe and output to the browser
const addRecipe = (recipe) => {
  let time = recipe.created_at.toDate();
  let html = `
  <li>
    <div>${recipe.title}</div>
    <div><small>${time}</small></div>
  </li>
`;

list.innerHTML += html;
};

db.collection('recipes').get().then(snapshot => {
  // when we have the data
  //cycle through the array and get the data for each recipe by passing doc.data() as an argument
  snapshot.docs.forEach(doc => {
    addRecipe(doc.data());
  });
}).catch(err => {
  console.log(err)
}); 