// Q 1
let str = 'Him"';
console.log(str.length);

// Q 2
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox2";
console.log(sentence.includes(word));
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

// Q 3
console.log(word.toLowerCase());
console.log(word.toUpperCase());

// Q 4
let str2 = "Please give Rs 10000000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);

// Q 5
let friend = "Lakshit";
friend[3] = "R";
console.log(friend);
