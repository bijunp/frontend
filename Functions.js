//normal function or named function

//userdefined functions:=Method
//HOF,CALLBACK
//generator function
//iife
//currying
//fc,fs,fo
//arrow

function add(a,b){

    return a+b;


}

function calc(a,add){//hof

    let n=add(5,6);//callback

    return a*n;
  


}

let ans=calc(10,add);

console.log(ans);



function * gen(){

    let i=0;
yield ++i;

i=1;
yield ++i;

}

let op=gen();

console.log(op.next().value);
console.log(op.next().value);


(function(){
    console.log("hi")
}())

let answer=function (a,b){
    return a+b;
}

console.log(answer(4,5));

function sub(a){


return function(b){


return function(c){

    return a-b-c;
}

}

}

let answ=sub(10)(2)(2);

console.log(answ)


let result=(a,b)=>a+b;


console.log(result(5,4));
