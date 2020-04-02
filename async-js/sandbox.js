// asynchronous javascript

// //rudimentary example of async javascript in action
// console.log(1);
// console.log(2);
// //trigger a callback using setTimeOut
// setTimeout(() => {
//   console.log('the callback function fired')
// }, 2000);
// console.log(3);
// console.log(4);

// // put the HTTP request logic in a reusable function add a parameter to take in a call function
// const getTodos = (callback) => {
  
//   const request = new XMLHttpRequest();

//   request.addEventListener('readystatechange', () => {
//     //added a conditional to verify if the status of the request is correct, if not, return a message to inform that there is an error
//     if(request.readyState === 4 && request.status === 200){
//       // convert the JSON string into an array of javascript objects
//       const data = JSON.parse(request.responseText);
//       //pass the converted data into the callback function as an argument
//       callback(undefined, data);
//     } else if(request.readyState === 4){
//       callback('could not get data', undefined);
//     }
//   });
// // made a HTTP request to the JSON Placeholder API
//   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//   request.send();
// };

// //  callback function with two parameters, added to the the logic of the if else conditional statement, the callback will output the data if the conditions are met, or output an error message if not
// getTodos((err, data) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });



// put the HTTP request logic in a reusable function add two parameters for the callback function
const getTodos = (resource,callback) => {
  
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    //added a conditional to verify if the status of the request is correct, if not, return a message to inform that there is an error
    if(request.readyState === 4 && request.status === 200){
      // convert the JSON string into an array of javascript objects
      const data = JSON.parse(request.responseText);
      //pass the converted data into the callback function as an argument
      callback(undefined, data);
    } else if(request.readyState === 4){
      callback('could not get data', undefined);
    }
  });
// made a HTTP request 
  request.open('GET', resource);
  request.send();
};

//  callback function with two  arguments including a function with two parameters, added to the the logic of the if else conditional statement, the callback will output the data if the conditions are met, or output an error message if not; the first argument is used to access our resources, which are the todo files in the todo folder
getTodos('/todos/todos2.json',(err, data) => {
  console.log(data);
  getTodos('/todos/todos3.json',(err, data) => {
    console.log(data);
    getTodos('/todos/todos.json',(err, data) => {
      console.log(data);
      
    });
  });
});