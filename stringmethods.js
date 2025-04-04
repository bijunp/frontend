let text="hello world";
let trimt="     hello     "

console.log(text.length);

console.log(text.at(1));

console.log(text.charAt(1));

console.log(text.slice(0,5));

console.log(text.substring(0,5));

console.log(text.split(" "));

console.log(text.replace("hello","New"));

console.log(text.toUpperCase());

console.log(trimt.trimEnd());

console.log(trimt.trimStart());

console.log(text.endsWith("d"));

console.log(text.startsWith("h"));

console.log(text.concat("Biju"));

console.log(text.includes("world"));

console.log(text.indexOf("r"));

console.log(text.lastIndexOf("o"));

console.log(text.repeat(1));

console.log(text.padEnd(12,"0"));


let obj={price:2000,gst:100,taxex:function(){
    console.log(this.price+this.gst);
}}


function destructuring(taxex){

taxex();

}

destructuring(obj);
