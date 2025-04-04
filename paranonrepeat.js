let para =
  "JavaScript is a powerful language. JavaScript allows developers to build dynamic web applications. Learning JavaScript can help you become a better web developer. Mover helps in creating smooth animations";
let newpara = new Set();
function iterate(args) {
  newpara.add(args);
}

let splitword = para.split(" ");
//console.log(splitword)
for (let i = 0; i < splitword.length; i++) {
  iterate(splitword[i]);
}

console.log(newpara);

let newStr = "";

newpara.forEach((val) => (newStr += val + " "));

console.log(newStr);
