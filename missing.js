let arr=[1,9,5,3,2,7];
//[1,2,3,4,5,6,7,8,9]
let min=arr[0];
let max=arr[0];

for(let i=0;i<arr.length;i++){


    if(max<arr[i]){

     max=arr[i];


    }

    if(min>arr[i]){

        min=arr[i];
    }


}


//console.log(max);
//console.log(min);



for(let j=min;j<=max;j++){

    let b=false;
     for(let k=0;k<arr.length;k++){

        if(j==arr[k]){
          
         b=true;
          break;
        }
      

     }

     if(b===false){
        console.log(j)
     }
       

    }




