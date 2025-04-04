let num=4561;

let num2=0;
while(num!=0){
   
    let temp=num%10;
    num2=num2*10+temp;
    num=Math.floor(num/10);




}

console.log(num2)