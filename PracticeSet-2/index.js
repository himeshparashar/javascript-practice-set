let marks = {
  himesh: 90,
  lakshit: 9,
  isha: 56,
  jyoti: 4,
};
// Q 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

// Q 2
for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}

// Q 3
let cnt = 43;
let i;
while (i != cnt) {
  console.log("Try again");
  i = prompt("Enter a number");
}
console.log("you have entered a correct number");

// Q 4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(4, 5, 6, 7));
