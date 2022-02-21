// const cleartime = setTimeout(myfunc, 2000);
// document.write("I love You");
// function myfunc() {
//   alert("hello there!");
// }
const greet = (name) => {
  alert("hello  " + name);
};
function inputuser(callback) {
  var name = prompt("please enter name");
  callback(name);
}
inputuser(greet);
const myinterval = setInterval(myfunction, 1000);
function myfunction() {
  let d = new Date();
  document.getElementById("demo").innerText =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  clearInterval(myinterval);
});

async function myfunc() {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("I love You!!");
    }, 3000);
  });
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("I Hate You!!");
    }, 6000);
  });
  document.getElementById("demo2").innerText = await promise;
  document.getElementById("demo2").innerText = await myPromise;
}
myfunc();

let add = (a, b, call) => {
  console.log(a * b);
  call();
};
let callback = () => {
  console.log("multiply");
};
new Promise((res) => {
  add(2, 2, callback);
});

let food = {
  item: ["tandoori chicken", "karahi"],
  ingrediants: ["spices", "salt"],
  drink: ["water", "vinegar"],
  meal: "chicken",
};
let order = (fruit_name, callback) => {
  setTimeout(function () {
    console.log(`${food.item[fruit_name]} was selected`);
    callback();
  }, 2000);
};
function productFood() {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log(`adding ${food.ingrediants[1]} and ${food.ingrediants[0]} `);
      setTimeout(() => {
        console.log(`adding ${food.drink[0]} and ${food.drink[1]}`);
        setTimeout(() => {
          console.log(`adding ${food.meal}`);
          setTimeout(() => {
            console.log("your product is ready");
          }, 6000);
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
}
order(1, productFood);
// Promise.all gives output if all are true otherwise gives rejected one
let timout = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1sec");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2sec");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3sec");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ended");
    }, 4000);
  }),
]);
timout
  .then((item) => {
    console.log("hello", item);
  })
  .catch((err) => {
    console.log("world", err);
  });
// promise.allSettled give all output with reason
let timout1 = Promise.allSettled([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1sec");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2sec");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3sec");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ended");
    }, 4000);
  }),
]);
timout1
  .then((item) => {
    console.log("hello", item);
  })
  .catch((err) => {
    console.log("world", err);
  });
// promise.race give of 1 as soon as possible either it is true or false
let timout2 = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("1sec");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("2sec");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3sec");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ended");
    }, 4000);
  }),
]);
timout2
  .then((item) => {
    console.log("hello", item);
  })
  .catch((err) => {
    console.log("world", err);
  });
//   another example of race it takes 2nd one because of time
let timeout3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 4000);
});
let timeout4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("world");
  }, 3000);
});
Promise.race([timeout3, timeout4])
  .then((value) => {
    console.log("!!", value);
  })
  .catch((err) => {
    console.log("ended", err);
  });
// fetch api
async function fetchAPI() {
  let res = await fetch("https://randomuser.me/api/?results=10");
  return await res.json();
}
async function getData() {
  let user = await fetchAPI();
  document.getElementById("user").innerText = JSON.stringify(
    user.results[0].name
  );
}
getData();

// let order1 = (time, work) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(work());
//     }, time);
//   });
// };
// order(2000, () => {
//   console.log("production has started");
// })
//   .then(() => {
//     return order(0000, () => console.log("production has started"));
//   })
//   .catch(() => {
//     console.log("Customer left");
//   })
//   .finally(() => {
//     console.log("end of day");
//   });
// async function kitchen() {
//   try {
//     await time(2000);
//     console.log("production has started");
//     await time(3000);
//     console.log(`adding ${food.ingrediants[1]} and ${food.ingrediants[0]} `);
//     await time(4000);
//     console.log(`adding ${food.drink[0]} and ${food.drink[1]}`);
//     await time(5000);
//     console.log(`adding ${food.meal}`);
//     await time(6000);
//     console.log("your product is ready");
//   } catch (error) {
//     console.log("customer leave");
//   }
// }
