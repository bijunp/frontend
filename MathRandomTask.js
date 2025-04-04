// function alphagen() {
   

//     //When we generate random number ie,0.999999=>when mul by 26(91-65) means 0 to 25 ,number generation begin like 0.999999*26=>25.999974(this is btw 0-25) and the add 26 gives=>90.999974(this number generation is btw 65-90) ascii capital  letters.
//     let random=Math.floor(Math.random()*26+65);

//     console.log(String.fromCharCode(random));




// }

// alphagen();



let alpha="abcdefghijklmnopqrstuvwxyz";

let random=Math.floor(Math.random()*alpha.length);

//console.log(random);

console.log(alpha[random]);