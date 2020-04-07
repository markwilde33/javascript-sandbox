// oop

// //create a simple object, log to console
// const userOne = {
//   username: 'Sam',
//   email: 'sam@sam.com',
//   login(){
//     console.log('the user logged in');
//   },
//   logout(){
//     console.log('the user logged in');
//   },
// }

// console.log(userOne.email, userOne.username);
// userOne.login();
// userOne.logout();

// const userTwo = new userOne('Cherie', 'cherie@gmail.com');


// create a class with a constructor function
class User {
  // include some parameters
  constructor(username, email){
    // set up object properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;

  }
}

// the 'new' keyword
// 1. it creates a new empty object {}
// 2 - it binds the value of 'this', when it's used in the class constructor, to the new empty object
// 3 - it calls the construction function to 'build' the object


//create a new user object, or 'an instance of the user class'
const userOne = new User('cherie', 'cherie@gmail.com');
const userTwo = new User('sparky', 'spky@gmail.com')

// chain methods
console.log(userOne, userTwo);
userOne.login().logout();
userTwo.login().logout();
userOne.incScore().incScore().incScore();
userTwo.incScore().incScore().incScore();
