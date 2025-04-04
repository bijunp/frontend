// let obj={

//      name:"biju",
//      age:21,
//      skills:["java","JSP","Servlet"],
//      gender:"male",
//      tools:{
//         testing:"Postman",
//         Version_control:"git"

//      }



// }


// let {name,skills:[first,second,third],tools:{Version_control,testing},age,gender}=obj;
// console.log(name)
// //console.log(skills[2])
// console.log(third)
// console.log(Version_control)
// console.log(first)
// console.log(second)
// console.log(testing)
// console.log(age)
// console.log(gender)



// console.log("///////")

// function destruc({name,skills:[first,second,third],tools:{Version_control,testing},age,gender}){

// //console.log(skills[2])
// console.log(third)
// console.log(Version_control)
// console.log(first)
// console.log(second)
// console.log(testing)
// console.log(age)
// console.log(gender)



// }
// destruc(obj);


let arr=["Java","JSP","Servlet",{Version:8,Framework:"Springboot"},["Python","Flask"]]


let [one,two,three,{Version,Framework},[nestedone,nestedtwo]]=arr;


console.log(one);
console.log(two);
console.log(three);
console.log(Version)
console.log(Framework)
console.log(nestedone)











