

let userobj={

name:"alex",
greet:function(){

let arrowfunc=()=>{
    console.log(this.name)
}

arrowfunc();


}








}

userobj.greet();




let name = "user"; // Must be declared before use

let obj = {
    [name]: 25, // This dynamically sets "user" as a property
};

let key = "color";
let value = "blue";

let model="xuv";
let carname="toyota";

obj[key] = value; // Equivalent to obj["color"] = "blue"
obj[model]=carname;
console.log(obj); // Output: { user: 25, color: 'blue' }
