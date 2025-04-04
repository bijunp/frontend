
//REVERSE A STRING AND CHECK IF IT IS A PALINDROME OR NOT

let name=prompt("enter a name");

let rev="";

for(let i=name.length-1;i>=0;i--){

rev+=name[i];


}

console.log(rev)

if(rev===name){

    console.log("palindrome")

}

else{

    console.log("not a palindrome")

}