let collection=new Set([5,6,4,8,7,8,4,5]);
collection.add(10);
collection.delete(4)

console.log(collection.size)
collection.forEach((val)=>console.log(val))
console.log(collection.has(5))

//collection.clear();

for(let val of collection){

console.log(val)


}

