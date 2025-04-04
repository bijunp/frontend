class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

greet(){

    console.log(`Hello, my name is ${this.name} and my age is ${this.age}`)

}

}







let per1=new Person("alex",23);

per1.greet();