let ninjas = ['ceri', 'roach', 'triss'];

ninjas[2] = 'yennefer';
console.log(ninjas[2]);

let ages = [20,34,56,78,];
console.log(ages[3]);

let random = ['jim', 'bob', 3, 50];
console.log(random);
console.log(ninjas.length);

// array methods

let result = ninjas.join(',');
console.log(result);

let result1 = ninjas.indexOf('ceri');
console.log(result1);

let result2 = ninjas.concat(['vesimir', 'dandelion']);
console.log(result2);
console.log(ninjas);

let result3 = ninjas.push('nekker');
console.log(result3);
console.log(ninjas);

 result3 = ninjas.pop('nekker');
console.log(ninjas);

result6 = ninjas.pop('');

console.log(result6);