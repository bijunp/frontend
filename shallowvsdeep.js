// let a=10;
// let b=a;
// console.log(a,b);
// b=20;
// console.log(a,b);      



// let obj={name:"John",age:30};
// let obj1=obj;
// console.log(obj,obj1);

// obj1.name="Smith";
// console.log(obj,obj1);


// let arr=["red","green","blue"];

// let arr1=[...arr];

// arr1.push("yellow");

// console.log(arr,arr1);




// let userprofile={
//     name:"John",
//     skills:["HTML","CSS","JS"]
// };
// //---------------------------------------kela irukira code than deep copy.
// let userprofile1={...userprofile,skills:[...userprofile.skills]};
// userprofile1.skills.push("React");
// console.log(userprofile,userprofile1);
// // The spread operator is used to create a shallow copy of an object or an array.

let num1=[1,2,3,4,5];

console.log(Math.max(...num1));
console.log(Math.min(...num1));
console.log(Math.floor(145.254));
console.log(Math.ceil(145.254));
console.log(Math.round(145.54));
console.log(Math.abs(-145.254));
