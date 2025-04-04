let choice = Number(prompt(
  "Press 1 for specific value looping\nPress 2 for odd and even\nPress 3 for even count"
));

let start=Number(prompt("Enter start of the number"));

let end=Number(prompt("Enter end of the number"));

switch (choice) {
  case 1:
    process(start,end,choice);
    break;

  case 2:
    process(start,end,choice);
    break;

  case 3:
    process(start,end,choice);
    break;

  default:
    let al = alert("invalid number");
    break;
}

function process(start, end, choice) {
  if (choice ===1) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  }

  if (choice === 2) {
    for (let i = start; i <= end; i++) {
      if (i % 2 == 0) {
        console.log(`Even number ${i}`);
      } else {
        console.log(`Odd number ${i}`);
      }
    }
  }
  if (choice === 3) {
    let count = 0;
    for (let i = start; i <= end; i++) {
      if (i % 2 == 0) {
        console.log(`Even number ${i}`);
        count++;
      }
    }

    console.log(`Even number count is ${count}`)
  }
}
