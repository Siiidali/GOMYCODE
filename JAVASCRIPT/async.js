// console.log(1);
// fetch("./data/sidali.json")
//   .then((res) => {
//     console.log(res);
//     const data = res.json();
//     console.log(data);
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(2);

const getTodos = async () => {
  try {
    const res1 = await fetch("./data/sidali.json");
    const data1 = await res1.json();
    console.log(data1);
    const res2 = await fetch("./data/mohamed.json");
    const data2 = await res2.json();
    console.log(data2);
    // throw new Error("sidali");
  } catch (error) {
    console.log(error.message);
  }
};
getTodos();
//  example !

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch data
//     reject("error");
//   });
// };

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
