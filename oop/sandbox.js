// oop

// the 'new' keyword
// 1. it creates a new empty object {}
// 2 - it binds the value of 'this', when it's used in the class constructor, to the new empty object
// 3 - it calls the construction function to 'build' the object

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

// class inheritance, extends the user class & has its own properties and methods also
class Admin extends User{
  // use the super constructor to create properties
  constructor(username, email, title){
    super(username, email);
    this.title = title;
  }
  deleteUser(user){
    //use the filter method to delete a user, cycle through the array, if the current username is not equal to the username given as an argument, then it is true and stays in the array, if its equal then its false, and gets deleted
    users = users.filter(u => u.username !== user.username);
  }
}

//create a new user object, or 'an instance of the user class'
const userOne = new User('cherie', 'cherie@gmail.com');
const userTwo = new User('sparky', 'spky@gmail.com');
//create a new admin object, or 'an instance of the admin class'
const userThree = new Admin('admin', 'admin@admin.com', 'black-belt-ninja');

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userThree);
console.log(users);
console.log(userThree);


// constructor functions 

// class Fruit {
//   constructor(name, color){
//     //set up properties
//     this.name = name;
//     this.color = color;
//   }
// }

// write the code without using classes
function Fruit(name, color){
  this.name = name;
  this.color = color;
  this.partyTime = function(){
    console.log(`This ${this.name} is ready to party! yeah baby yeah!`);
    return this
  };
}



const fruitOne = new Fruit('banana', 'yellow');
const fruitTwo = new Fruit('apple', 'green');

console.log(fruitOne, fruitTwo);
fruitOne.partyTime().partyTime();
fruitTwo.partyTime().partyTime();