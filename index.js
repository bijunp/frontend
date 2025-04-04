let a=10;
console.log(a)
let b=10;
console.log(a===b)

function add(name,age=4){

console.log(`hello ${name} age: ${age}`);

}

add(`raj`)


// keywords  - reserved word

// let,var,const -variables


// const tamilmark=45

// var a =10
   
//  b=10

// console.log(b)


// let tamilMarkNew=10     //camelCase

// let TamilMarkNew=10        //PasCalcase


// let tamil_mark=10   //snake_Case


// let const ="alex"     


// identifiers-variables name ,function ,class


// let a    //-->decaring

 
// let a =10  // ==>initializing


//  a =20    // ==>re-initializing


// let a ="two" // re-decaring

//  data type -1.primitive Data type,2.non-primitive type




//1.primitive Data Type

  //1.string
  // 2.Number
  // 3.boolean
  // 4.null
  // 5.undefined
  

//   let stringData='alex'
//   let numberData=123.987
//   let booleanData=true,false
//   let nullData=null
//   let undefinedData
//   console.log(nullData)
// console.log(undefinedData)
// console.log(typeof null)



// non-primitive Data Type'
 
 //1.object
 //2.array
 //3.function


//

//    let str1="biju"
//    let str2="biju"

//   let str3="biju"


//       console.log("this for user name "+ str1)
//       console.log("this for user name "+ str2)
//       console.log(this for user name ${str3})

console.log(Number())
//explicit conversion
function add(a,b){


  let c=Number(a)+Number(b);
  console.log(c)
  console.log(typeof c)


}

add("10",20)

//Type Coversion

      // 1.implicit conversion

    // let name =alex
                                            // Data type run Time 
    //  let a=23

    //  let b=undefined                         //null-0        true-1,false-0

    //  let c =a-b                         // 10 * 0 =0
     //NAN-not a number
    //  let c =a-b

      // console.log(typeof a)
      // console.log(typeof name)

      // console.log(c)
      // console.log(typeof a)
      // console.log(typeof b)
      // console.log(typeof c)

      // 2.Explicit conversion


      //  let a =10      // String

        //  a=Number(a)

        // a=Boolean(a)

        //  a=String(a)


      // console.log(Boolean(0))
      // console.log(Number("7"))

      // function addTwoNumber(a,b){
           
      //   let  c =Number(a)+Number(b)

      //   console.log(c) 

      //   console.log(typeof c)

      // }

      // addTwoNumber("10",20)


        // let name=  `a
        // l
        // e
        // x
        // `

        // let str="a                                   lex"

        // let age =23

        // console.log("my name is "+name+"my age is "+age)

        // console.log(my name is ${name} my age is ${age})



        console.log(5*1);

        let x=5;
        let y=x++;

        console.log(y)