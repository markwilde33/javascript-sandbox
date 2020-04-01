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


// made a HTTP request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  if(request.readyState === 4){
    console.log(request.responseText);
  }
});


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();