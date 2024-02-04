const prompt = require("prompt-sync")();

// Practice Problem 1
let arr1 = [1, 2, 3, 4, 5, 6, 7, 83];
let a1 = prompt("Enter a number");
a1 = Number.parseInt(a1);
arr1.push(a1);
console.log(arr1);

// Practice Problem 2
let arr2 = [1, 2, 3, 4, 5, 6, 7, 83];
let a2;
do {
  a2 = prompt("Enter a number (enter 0  if you want to stop)");
  a2 = Number.parseInt(a2);
  arr2.push(a2);
} while (a2 != 0);
console.log(arr2);

// Practice Problem 3
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let n3 = arr3.filter((x) => {
  return x % 10 == 0;
});
console.log(n3);

// Practice Problem 4
let arr4 = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let n4 = arr4.map((x) => {
  return x * x;
});
console.log(n4);

// Practice Problem 5
let arr5 = [1, 2, 3, 4, 5];
let n5 = arr5.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n5);
