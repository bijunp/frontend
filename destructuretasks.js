const user = {
    name: "Alice",
    age: 25,
    address: {
      city: "New York",
      zip: 10001,
    },
    skills: ["JavaScript", "React", "Node.js"],
  };

  let{name,address:{city,zip},skills:[f,s]}=user;

  console.log(name);
  console.log(city);
  console.log(zip);

  console.log(f);
  console.log(s)


  const numbers = [10, 20, 30, [40, 50, 60], 70];

  let[one,,three,[on,five,six]]=numbers;
  console.log(one);
  console.log(three)
  console.log(on)
  console.log(five)
  console.log(six)
  
  