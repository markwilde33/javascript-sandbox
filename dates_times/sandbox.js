// dates & times
const now = new Date();

console.log(now);
console.log(typeof now);

// years, months, days, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth (0-based):', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay (0-based):', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps
console.log('timestamp:', now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// <--------------------------------------------------------------------------->

// timestamps         
//const before = new Date('02/01/2019 7:30:59');
const before = new Date('February 1 2019 7:30:59');
const now2 = new Date();

const diff = now2.getTime() - before.getTime();
// const diff = now2 - before;

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`the before date was ${mins} mins ago`);
console.log(`the before date was ${hours} hours ago`);
console.log(`the before date was ${days} days ago`);

// converting timestamps to dates
const timestamp = 1675938474990;
console.log(new Date(timestamp));  


// <--------------------------------------------------------------------------->

// Build a digital clock

const clock = document.querySelector('.clock');

const tick = () => {
  //construct a new date object and set it to now
  const now = new Date();
  
  // get the current hours, minutes & seconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // create a template string to store the values
  const html = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
  `;
  // inject html to the div with a class of clock
  clock.innerHTML = html;

};
// set the tick function to fire every second
setInterval(tick, 1000);

// working with date-fns, a javaScript date utility library
const $now = new Date();

//console.log(dateFns.isToday($now));

// formatting options
console.log(dateFns.format($now, 'YYYY'));
console.log(dateFns.format($now, 'MMMM'));
console.log(dateFns.format($now, 'MMM'));
console.log(dateFns.format($now, 'dddd'));
console.log(dateFns.format($now, 'Do'));
console.log(dateFns.format($now, 'dddd Do MMMM YYYY'));


// comparing dates
const $before = new Date('April 1 2020 15:42:00')
// more date-fns functionality
console.log(dateFns.distanceInWords($now, $before, {addSuffix: true}));
