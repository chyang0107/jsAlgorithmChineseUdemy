// //Array
let arr = ["Harry", "Ron", "Snap"];
// // JS for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   console.log(i);
// }

// forEach
// arr.forEach((person) => {
//   console.log(person);
// });

// // object
// let Harry = {
//   name: "Harry Porter",
//   age: 40,
//   married: true,
//   sayHi() {
//     console.log("Harry says hi to you");
//   },
// };

// console.log(Harry.age);
// console.log(Harry["age"]);
// Harry.sayHi();
// // function
// function add(n1, n2) {
//   return n1 + n2;
//   // The codes under the 'return' could not executible
//   console.log(n1 + n2);
// }

// console.log(add(10, 15));
// Class

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// let c1 = new Circle(5);

function fun2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//console.log(fun2(10));

function fun1(n) {
  return ((1 + n) * n) / 2;
}

//console.log(fun1(10));

let time1 = window.performance.now();
fun1(100000000);
let time2  = window.performance.now();
let timeDiff1 = (time2-time1)/1000;
console.log(`It takes ${timeDiff1} seconds to run fun1.`);

let time3 = window.performance.now();
fun2(100000000);
let time4  = window.performance.now();
let timeDiff2 = (time4-time3)/1000;
console.log(`It takes ${timeDiff2} seconds to run fun2.`);
