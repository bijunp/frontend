// var name="biju";//declaration+initialization
// let age=21;//declaration+initialization
// const gender="male";//declaration+initialization

// name="girees";//reassign

// var name="harish";//redeclare
// console.log(name);

// gender="female";

// console.log(gender)

// console.log("10"*12)

// console.log(typeof(undefined))

// let name="customer";

// let productkey="product";

// let productvalue="watch";

// let customerobj={

// [name]:"biju",

// }

// customerobj[productkey]=productvalue;

// console.log(customerobj)

// var name= "biju";

// let userobj = {
  
//   greet: ()=> {
//     console.log(`hello ${this.name}`);
//   },
// };

// userobj.greet();



let name="biju";
let age=21;
let gender="male";

let info=[];

function userinfo(name,age,gender){

let obj={
    name,age,gender
};

info.push(obj);

}


userinfo(name,age,gender);

console.log(info)