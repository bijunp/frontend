let arr = [
  { id: 1, product: "TV", amount: 20000 },
  { id: 2, product: "Watch", amount: 10000 },
  { id: 3, product: "Fridge", amount: 15000 },
  { id: 4, product: "Washing Machine", amount: 5000 },
  { id: 5, product: "Bike", amount: 200000 },
  { id: 6, product: "Car", amount: 4000000 },
  { id: 7, product: "Pen", amount: 10 },
  { id: 8, product: "Table", amount: 5000 },
  { id: 9, product: "Chair", amount: 1500 },
  { id: 10, product: "Bench", amount: 2500 },
];

let newarr = arr.filter((val) => val.amount > 15000);

let discounted_products=newarr.map((val)=>({id:val.id,product:val.product,amount:val.amount-5000}));

let totalbill = discounted_products.reduce((pv, cv) => pv + cv.amount, 0);

console.log(totalbill);
