// asynchronous javascript

// rudimentary example of async javascript in action
console.log(1);
console.log(2);
// trigger a callback using setTimeOut
setTimeout(() => {
  console.log('the callback function fired')
}, 2000);
console.log(3);
console.log(4);
