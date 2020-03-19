// if statements
const age = 25;

if(age > 20){
    console.log('shit in your face')
}

const desperados = ['one-eye', 'blue eyes', 'brown eyes', 'no eyes']

if (desperados.length > 5){
    console.log('who shot ya?');
} else if (desperados.length == 3){
    console.log('die die effing die?')
} else{
    console.log('the good die young')
}

const password = 'p@ss4';

// Use logical operators - OR || also AND &&

if(password.length >= 12 && password.includes('@')){
    console.log('that password is delish!');
}  else if (password.length >= 8 || password.includes('@')) {
    console.log('that password is alright!')
} else{
    console.log('that password is too short!')
}

// logical NOT (!)

let user = false;

if(!user){

}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score is: ', scores[i]);
    
    if(scores[i] === 100){
    console.log('you did it! you broke the wheel');
    break;
}
}

// switch statements
const grade = 'h';

// using switch statements

switch(grade){
   case 'A':
       console.log('you got an A');
       break
   case 'B':
       console.log('you got a B');
       break
   case 'C':
       console.log('you got a C');
       break
   case 'D':
       console.log('you got a D');
       break
   case 'E':
       console.log('you got an E');
       break
   default:
       console.log('you got sweet fa');
}



console.log(grade);


// type conversion

let score = '100';

// score = Number(score)
console.log(score + 1);
console.log(typeof score);

let result = Number('hello');

console.log(result);

// variables & block level scope

let pig = 'beautiful sentient being';


if(true){

    
    let pig = 'We love our buddies';
    console.log('inside the 1st code block: ', pig);
    

    if(true){
    let pig = 'we like cabbage'; 
    console.log('inside the 2nd code block: ', pig);
    }
}
console.log('outside the code block: ', pig);