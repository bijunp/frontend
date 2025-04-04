(function (name){
 console.log(`hello ${name}`)
}("raj"))


function * hello(){

  let i=0;
  i=1

    yield i;
    yield i;

}

let a=hello();

console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)