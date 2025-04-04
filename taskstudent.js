function studetails(name, ...marks) {
  console.log(`Welcome ${name}`);

  if (marks.length === 0) {
    console.log("Marks not given");
    return;
  }

  if (marks.length > 5) {
    marks = marks.slice(0, 5);
  }

  let total = marks.reduce((tot, val) => tot + val, 0);
  let sub_count = marks.length;
  let avg = Math.floor(total / sub_count);

  console.log(`Total Marks: ${total}`);
  console.log(`Average Marks: ${avg}`);

  if (total >= 450 && total <= 500) {
    console.log("Grade: A");
  } else if (total >= 400 && total < 450) {
    console.log("Grade: B");
  } else if (total >= 300 && total < 400) {
    console.log("Grade: C");
  } else if (total >= 200 && total < 300) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }
}

studetails("Ajay", 90, 85, 88, 95, 92, 99);
studetails("Raj");
