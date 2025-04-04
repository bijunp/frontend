let promise = new Promise((res, rej) => {
  let arr = [0];

  setTimeout(() => {
    let arr = [0];

    if (arr.length != 0) {
      res(arr);
    } else {
      rej("no element");
    }
  },2000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {
    console.log("nothing");
  });
