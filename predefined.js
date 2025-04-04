let fruits1 = ['apple', 'banana'];
fruits1.push('orange');
console.log(fruits1); // ['apple', 'banana', 'orange']

let fruits2 = ['apple', 'banana', 'orange'];
fruits2.pop();
console.log(fruits2); // ['apple', 'banana']


let fruits3 = ['apple', 'banana', 'orange'];
fruits3.shift();
console.log(fruits3); // ['banana', 'orange']


let fruits4 = ['apple', 'banana'];
fruits4.unshift('orange');
console.log(fruits4); // ['orange', 'apple', 'banana']


let fruits5 = ['apple', 'banana', 'orange'];
fruits5.splice(1, 1, 'grape');
console.log(fruits5); // ['apple', 'grape', 'orange']


let fruits6 = ['apple', 'banana', 'orange'];
let index1 = fruits6.indexOf('banana');
console.log(index1); // 1


let fruits7 = ['apple', 'banana', 'orange', 'banana'];
let lastIndex = fruits7.lastIndexOf('banana');
console.log(lastIndex); // 3


let numbers1 = [1, 2, 3, 4, 5];
let found = numbers1.find(num => num > 3);
console.log(found); // 4


let numbers2 = [1, 2, 3, 4, 5];
let index2 = numbers2.findIndex(num => num > 3);
console.log(index2); // 3


let fruits = ['apple', 'banana', 'orange'];
let hasBanana = fruits.includes('banana');
console.log(hasBanana); // true


let combined=numbers2.concat(fruits);

console.log(combined.length)

let doublnum=numbers2.map((num)=>num*2);

console.log(doublnum)

numbers2.forEach((num,index)=>{
    console.log(`${num} ,${index}`)
});
