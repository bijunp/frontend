let username=["ab","bc","c","d","e"];

let newarr=username.filter((name)=>name.length===2);

console.log(newarr)

let nums=[1,2,4,5,6,7,8,9]

console.log(nums.slice(0,3))

let newnums=nums.reduce((pv,cv)=>{
    return pv+cv
})

console.log(newnums)


