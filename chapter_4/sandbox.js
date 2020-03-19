// for loops
const names = ['gem', 'neads', 'rips'];

for(let i = 0; i < names.length; i++){
//    console.log(names[i]); 
let html = `<h3>${names[i]}</h3>`;
console.log(html);
}


// while loop
let i = 0
while (i < 5){
    console.log('in loop: ', i);
    i++;
}

let x = 0;
while(x < names.length){
    console.log(names[x]);
    x++;
}

// do while loops

let y = 5;

do{
    console.log('value of y is: ', y);
    y++
} while(y < 5);