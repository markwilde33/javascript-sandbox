// oop

//create a simple object, log to console
const userOne = {
  username: 'Sam',
  email: 'sam@sam.com',
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged in');
  },
}

console.log(userOne.email, userOne.username);
userOne.login();
userOne.logout();