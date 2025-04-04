function addop(num1,num2,callback){

return callback(num1,num2)


}



function add(num1,num2){

return num1+num2;


}



let ans=addop(4,5,add)

console.log(ans)