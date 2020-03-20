// object literals

let user = {
  name: 'Thom',
  age: 50,
  fav_color: 'blue',
  location: 'Hannover',
  games: [{title: 'mad max', likes: 30},
  {title: 'dark souls', likes: 33}
  ],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logGames(){
    console.log('this user played the following games');
    this.games.forEach(game => {
      console.log(game.title, game.likes);
    })
  },

};


console.log(user);

// log user in a table format, very useful for ease of viewing
console.table(user);

// use dot notation or square brackets to log a property
console.log(user.name);
console.log(user['name']);

// use dot notation or square brackets to change a property value
user.age = 39;
user['age'] = 40;

console.log(user.age);

// get the user typeof information, returns type as user is an object
console.log(typeof user);

user.login();
user.logout();
user.logGames();

// log the games stored in the user object by calling the logGames function which uses the this keyword on the games property to access the games array using a forEach callback function
user.logGames();



// Math objects

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));


// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

