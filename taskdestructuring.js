const product = {
  id: 1,
  datails: {
    price: 100,
    stock: 50,
  },
  nestedArray: [1, 2, 3, [4, 5, 6]],
};

let {
  nestedArray: [, , , [, five, six]],
} = product;

console.log(five);
console.log(six);

let nestedArray = [
  1,//0
  2,//1
  3,//2
  [4, 5, 6],//3
  { id: 1, datails: { price: 100, stock: 50 } /*4 */ },

];

let[,,,,{datails:{price,stock}}]=nestedArray;
console.log(price)
console.log(stock)


function objofarray({
    nestedArray: [, , , [, five, six]],
  }){

    console.log(five);
    console.log(six);


}

objofarray(product)


function arrayofobj([,,,,{datails:{price,stock}}]){

    console.log(price)
    console.log(stock)

}

arrayofobj(nestedArray)