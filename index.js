console.log("hello");
function myfunc(item) {
  return item.split("").reverse().join("");
}
console.log(myfunc("nabeel"));

function myfunc1(num) {
  return num.toString().split("").reverse().join("");
}
console.log(myfunc1(12333));
// let array = [2,3,4,6,6,'hello'].filter(myfunc2)
// function myfunc2(value){
//  return value < 6
// }
// console.log(array)
// let array1 = array.filter(function myfunc3 (value) {
//     return value > 2
// })
// console.log(array1)
let array = [2, 3, 4, 6, 6, "hello"];
array.shift();
array.splice(2, 2);
console.log(array);
let a = [2, 3, 6, 9, 10, 7];

// function test(...n) {
//   for (let i = 0 ; i< n.length ; i++) {
//     if (i === 1 ) {
//       document.write("false   " + i);
//     } else if (i === 2) {
//         document.write("true   " + i);
//     } else {
//       for (let x = 2; x < i; x++) {
//         if (i % x === 0) {
//             document.write("false  "+ i);
//         }
//         document.write("true    " + i);
//       }
//     }
//   }
// }

// console.log(test(...a));
function test_prime(...n) {
  console.log(...n);
  for (let x of n) {
    if (x === 1) {
      return false;
    } else if (x === 2) {
      console.log("true");
    } else {
      for (var x1 = 2; x1 < x; x1++) {
        if (x % x1 === 0) {
          console.log("false");
        }
      }
      console.log("true");
    }
  }
}

console.log(test_prime(...a));

let sample = [
  [1, 2],
  [3, 4],
  [5, 6],
];

var sum = 0;
for (var i = 0; i < sample.length; i++) {
  sum = sum + sample[i];
  console.log(sample[i]);
  sample[i].reduce(function (a, b) {
    console.log(a + b);
  });
}

var sum1 = 0;
for (var i = 0; i < sample.length; i++) {
  for (var j = 0; j < sample[i].length; j++) {
    sum1 += sample[i][j];
  }
}
console.log("total  " + sum1);
const obj1 = {
  id: 1,
  title: "hello",
};
const obj2 = {
  id: 1,
  post: "world",
};
let v = { ...obj1, ...obj2 };
console.log(v);

const obj3 = [
  {
    id: 1,
    title: "hello",
  },
  {
    id: 2,
    title: "hi",
  },
];
const obj4 = [
  {
    id: 1,
    post: "hello",
  },
  {
    id: 2,
    post: "hi",
  },
];
let g = obj3.concat(...obj3, ...obj4);

console.log(g);
const arr = [4, 3, 6, 3, 4, 3];

function count_duplicate(a) {
  let counts = {};
  for (let i = 0; i < a.length; i++) {
    if (counts[a[i]]) {
      counts[a[i]] += 1;
    } else {
      counts[a[i]] = 1;
    }
  }
  console.log(counts);
}
count_duplicate(arr);

// java script is a single threaded which means it works in a line , javascipt can multithreaded by event loop which gives us javascript as a multithreaded by illusion
async function myfunc6(item) {
  let market = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let result = await market.json();
  console.log(result);
}
myfunc6();
let myPromise = new Promise(function (resolve, reject) {
  let x = 0;
  if (x === 0) {
    resolve("ok");
  } else {
    reject("reject");
  }
});
// function hello(some){
//   console.log(some)
// }
// myPromise.then(function(value){
//   hello(value)
// },
// function(error){
//   hello(error)
// })

let x = 5;
function myfunc8(x, y) {
  try {
    console.log(x + y);
  } catch (error) {
    console.log(error);
  }
}
myfunc8(9, 9);
let myPromise1 = new Promise(function (resolve, reject) {
  let x = 0;
  if (x === 0) {
    resolve("ok1");
  } else {
    reject("reject");
  }
});
// return promise which faster to execute
Promise.race([myPromise, myPromise1]).then(function (value) {
  console.log(value);
});
// make a new promise and return promise in array
Promise.all([myPromise, myPromise1]).then((value) => {
  console.log(value);
});
// return promise in array of object
Promise.allSettled([myPromise, myPromise1]).then((value) => {
  console.log(value);
});
// set interval
// setInterval((g) => {
//   let time = new Date()
//   console.log(time.getHours()+" :"+time.getMinutes()+":"+time.getSeconds())
// }, 1000);
// timeout using async function
async function time() {
  setTimeout(() => {
    console.log(" this is time out");
  }, 3000);
}
time();
// /timeout using promises
let myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("I love You");
  }, 2000);
});
let myPromise3 = new Promise(function (resolve, rejcet) {
  setTimeout(() => {
    console.log(" I hate you");
  }, 4000);
});
Promise.all([myPromise2, myPromise3]).then((value) => {
  console.log(value);
});
//  callback function
function some(value) {
  console.log(value);
}
function time1(x, y, myCallback) {
  let sum = x + y;
  myCallback(sum);
}
time1(1, 54, some);
const name1 = prompt("please enter string");
let result3 = name1.split("");
let countss = 0;
for (let index = 0; index < result3.length; index++) {
  const element = result3[index];
  if (element.toLowerCase() === "a") {
    countss++;
  }
}
console.log(result3, countss);
// function takeSt(value) {
//   console.log(value)

// }
// takeSt(name)
