// // query a form
// const form = document.querySelector('.signup-form');
// // const username = document.querySelector('#username');

// form.addEventListener('submit', e => {
//   //stop the page refreshing on submit
//   e.preventDefault();
//   // console.log(username.value);
//   // use dot notation to get the username value from the form, quicker than using a querySelector
//   console.log(form.username.value);

// });

// form validation
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
 
  //validation
  const username = form.username.value;
 

  if (usernamePattern.test(username)){
    // valid name
    feedback.textContent = 'that will do pig'
  } else{
    // name not valid
    feedback.textContent = 'computer says no, please enter letters only, between 6-10 characters'
  }
});

// live feedback
form.username.addEventListener('keyup', e => {
  //get the value of the targeted event
  // console.log(e.target.value) //best practice 
  //or
  // console.log(form.username.value);
  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class', 'success')
  } else {
    form.username.setAttribute('class', 'error')
  }
});