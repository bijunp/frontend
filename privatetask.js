class logindetails {
  #login = [
    { name: "raj", password: "04651" },
    { name: "ash", password: "753159" },
  ];

  get details() {
    return this.#login.map((d) => ({ name: d.name }));
  }

  set newlogin(login) {
    this.#login.push({ name: login.name, password: login.password });
  }
}

let detail1 = new logindetails();
detail1.newlogin = { name: "sam", password: "98765" };

console.log(detail1.details);
