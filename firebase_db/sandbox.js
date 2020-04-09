// get a reference to the ul, form & button elements 
const list = document.querySelector('ul');
const form = document.querySelector('form');
button = document.querySelector('button');


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

//delete a recipe from the dom after its been deleted from the database
const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach(recipe => {
    if(recipe.getAttribute('data-id') === id){
      recipe.remove();
    }
  });
};

// real-time listener
const unsub = db.collection('recipes').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if(change.type === 'added'){
      // console.log(doc);
      addRecipe(doc.data(), doc.id)
    } else if (change.type === 'removed'){
      deleteRecipe(doc.id);
    }
  });
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

  // unsub from database changes
  button.addEventListener('click', () => {
    unsub();
    console.log('unsubscribed from collection changes, databases changes are not being shown in the browser');
  });