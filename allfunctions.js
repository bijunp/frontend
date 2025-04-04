//these methods modify the original array


let arr = [1, 2, 3];
arr.push(4); 
console.log(arr); 

let arr1 = [1, 2, 3];
arr1.pop();
console.log(arr1); 

let arr3 = [2, 3];
arr3.unshift(1);
console.log(arr3); 

let arr4 = [1, 2, 3];
arr4.shift();
console.log(arr4); 


let fruits = ['apple', 'banana', 'orange'];
fruits.reverse(); 

let fruits2 = ['orange', 'apple', 'banana'];
fruits2.sort(); 

let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 4);

let fruits3 = ['apple', 'banana', 'orange'];
fruits3.splice(1, 1, 'mango'); 

let numbers2 = [1, 2, 3, 4, 5];
numbers2.copyWithin(0, 3); 

//methods that do not modify the original array,will return new array

let fruits4 = ['apple', 'banana'];
let newFruits = fruits4.concat(['orange', 'grape']);

// fruits4 remains ['apple', 'banana']
// newFruits is ['apple', 'banana', 'orange', 'grape']

let fruits5 = ['apple', 'banana', 'orange', 'grape'];
let citrus = fruits5.slice(1, 3);

// fruits5 remains ['apple', 'banana', 'orange', 'grape']
// citrus is ['banana', 'orange']

let numbers3 = [1, 2, 3];
let doubled = numbers3.map(x => x * 2);
// numbers3 remains [1, 2, 3]
// doubled is [2, 4, 6]

let numbers4 = [1, 2, 3, 4, 5];
let evens = numbers4.filter(x => x % 2 === 0);
// numbers4 remains [1, 2, 3, 4, 5]
// evens is [2, 4]

let nested = [1, [2, 3], [4, [5, 6]]];
let flattened = nested.flat(2);
// nested remains [1, [2, 3], [4, [5, 6]]]
// flattened is [1, 2, 3, 4, 5, 6]

let sentences = ["Hello world", "I am learning"];
let words = sentences.flatMap(s => s.split(" "));
// sentences remains ["Hello world", "I am learning"]
// words is ["Hello", "world", "I", "am", "learning"]

//Methods that return values(no array modification)

let sentences2 = ["Hello world", "I am learning"];
let words2 = sentences2.flatMap(s => s.split(" "));
// sentences2 remains ["Hello world", "I am learning"]
// words2 is ["Hello", "world", "I", "am", "learning"]

let numbers5 = [5, 12, 8, 130, 44];
let found = numbers5.find(x => x > 10);
// numbers5 remains unchanged
// found is 12

let numbers6 = [5, 12, 8, 130, 44];
let index = numbers6.findIndex(x => x > 10);
// numbers remains unchanged
// index is 1

let numbers7 = [2, 4, 6, 8];
let allEven = numbers7.every(x => x % 2 === 0);
// numbers remains unchanged
// allEven is true

let numbers8 = [1, 3, 5, 6];
let hasEven = numbers8.some(x => x % 2 === 0);
// numbers remains unchanged
// hasEven is true

let numbers9 = [1, 2, 3, 4];
let sum = numbers9.reduce((total, num) => total + num, 0);
// numbers remains unchanged
// sum is 10

let fruits6 = ['apple', 'banana', 'orange', 'banana'];
let index2= fruits.indexOf('banana');
// fruits6 remains unchanged
// index2 is 1

let fruits7 = ['apple', 'banana', 'orange'];
let hasBanana = fruits7.includes('banana');
// fruits7 remains unchanged
// hasBanana is true

