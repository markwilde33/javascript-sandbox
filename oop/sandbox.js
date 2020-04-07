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
  // this.partyTime = function(){
  //   console.log(`This ${this.name} is ready to party! yeah baby yeah!`);
  //   return this
  // };
}


// add methods to the Fruit prototype instead of the Fruit object, now the method is stored in _proto_ and not in the class itself, this is more efficient as its stored once, in one location, and it is useful for prototype inheritance

Fruit.prototype.partyTime = function(){
  console.log(`This ${this.name} is ready to party! yeah baby yeah!`);
}

Fruit.prototype.sleepyTime = function(){
  console.log(`This ${this.name} is ready for bed, night night.`);
}

//use the call() method on the fruit object to inherit it's properties
function fruitBoss(name, color, title){
 Fruit.call(this, name, color);
 this.title = title;
}

//get the methods from the parent Fruit object like so
fruitBoss.prototype = Object.create(Fruit.prototype);

//create a new method for the fruitBoss object only like so
fruitBoss.prototype.deleteFruit = function(fruit){
//code block here
}



const fruitOne = new Fruit('banana', 'yellow');
const fruitTwo = new Fruit('apple', 'green');
const fruitThree = new fruitBoss('apple', 'green', 'boss of fruits');

console.log(fruitThree);
veryFruity = [fruitOne, fruitTwo, fruitThree]
console.log(veryFruity);
console.log(fruitOne, fruitTwo, fruitThree);
fruitOne.partyTime();
fruitTwo.sleepyTime();
