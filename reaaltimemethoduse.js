
let employess=[]

function userData(name,age,id,salary,position){

    let  userObject={
        userName:name,
        userAge:age,
        userId :id,
        userSalary:salary,
        userPosition:position

    }

   employess.push(userObject)
}


userData("alex",23,1,20000,"software Engineer")
userData("arun",24,1,25000,"Designer")
userData("a",24,1,25000,"front-end")
userData("b",30,1,35000,"back-end")
userData("ajith",30,1,35000,"back-end")
userData("mike",30,1,55000,"back-end")
userData("peter",35,1,20000,"Designer")
userData("d",25,1,40000,"Manager")

//PRINT EMPLOYEE DATA
console.log(employess)


//SORT BY HIGHER SALARY
employess.sort((a,b)=>b.userSalary-a.userSalary);
console.log(employess)



//FILTER BY SAL>25000
let sal_greater=employess.filter((sal)=>sal.userSalary>25000);

console.log(sal_greater)


