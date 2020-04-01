// asynchronous javascript

//rudimentary example of async javascript in action
console.log(1);
console.log(2);
//trigger a callback using setTimeOut
setTimeout(() => {
  console.log('the callback function fired')
}, 2000);
console.log(3);
console.log(4);


// made a HTTP request to the JSON Placeholder API
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  //added a check to verify if the status of the request is correct, if not, return a message to inform that there is an error
  if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText);
  } else if(request.readyState === 4){
    console.log('could not fetch the data');
  }
});


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();