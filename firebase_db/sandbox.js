// get a reference to the ul & form elements 
const list = document.querySelector('ul');
const form = document.querySelector('form');

// function to get data from each recipe and output to the browser
const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
  <li data-id="${id}">
    <div>${recipe.title}</div>
    <div><small>${time}</small></div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
  </li>
`;

list.innerHTML += html;
};

db.collection('recipes').get().then(snapshot => {
  // when we have the data
  // cycle through the array and get the data for each recipe by passing doc.data() as an argument
  snapshot.docs.forEach(doc => {
    addRecipe(doc.data(), doc.id);
  });
}).catch(err => {
  console.log(err)
}); 

// add document on submit
form.addEventListener('submit', e => {
  e.preventDefault();
  // set date
  const now = new Date();
  // create recipe object to be added to the database
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };
  // get and resolve the promise to add recipe to the database
  db.collection('recipes').add(recipe)
  .then(() => {
    console.log('the buns are in the oven')
  }).catch(() => {
    console.log('the buns fell on the floor')
  })
});

// delete data
list.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON'){
    const id = e.target.parentElement.getAttribute('data-id');
    console.log(id);
    // get and resolve the promise to delete recipe to the database
    db.collection('recipes').doc(id).delete().then(() => {
      console.log('recipe deleted');
    });
  }
  });