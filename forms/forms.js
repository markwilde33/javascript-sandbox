const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  //stop the page refreshing on submit
  e.preventDefault();
  // console.log(username.value);
  // use dot notation to get the username value from the form, quicker than using a querySelector
  console.log(form.username.value);

});