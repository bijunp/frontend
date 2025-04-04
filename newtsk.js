/*function aa() {
  var a = 10;
  let b = 20;
  const c = 30;
}

aa();
console.log(a);
*/
// var a;
// console.log(a)
// var a="hello";
// console.log(a)
var a=10;
function outerFunction(){
var a= 20
function innerFunction(){
var a=30;                 //lexical scope
console. log(a)
}
console.log(a)
innerFunction()
}
outerFunction()