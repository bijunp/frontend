

function allowaccess(name,age){

try{

if(age>18 && age<45){

console.log(`${name} your access is granted`)

}
else{
throw new Error(`${name} your access is Denied`);

}


}
catch(error){

console.log(error);

}



}



allowaccess("biju",21);