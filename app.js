// //Array
let arr = ["Harry", "Ron", "Snap"];
// // JS for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   console.log(i);
// }

// forEach
arr.forEach((person) => {
  console.log(person);
});

// object
let Harry = {
  name: "Harry Porter",
  age: 40,
  married: true,
  sayHi() {
    console.log("Harry says hi to you");
  },
};

console.log(Harry.age);
console.log(Harry["age"]);
Harry.sayHi();
