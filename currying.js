// function currying(){

//     console.log("currying")


// }

// currying()


// (function (){

//     console.log("IIFE FUNC")
// }())

// console.log("hello")


function add(a){
return function(b){

console.log(a+b)

}

}

let ans=add(5);
ans(4);





let addition=(a)=>{

return (b)=>{

    return (c)=>{

        return a+b+c;

    }

}

}

console.log(addition(10)(20)(30))