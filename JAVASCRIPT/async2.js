// const getTodos = (url) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         let data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error serveur");
//       }
//     });
//     request.open("GET", url); // setting up the request
//     request.send(); // send th
//   });
// };

// getTodos("./data/mohamed.json")
//   .then((data) => {
//     console.log(data);
//     return getTodos("./data/sidali.json");
//   })
//   .then((data) => {
//     console.log(data);
//     return getTodos("./data/karim.json");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getTodos("./data/karim.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   if (data) {
//     console.log(data);
//     getTodos("./data/sidali.json", (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       if (data) {
//         console.log(data);
//       }
//     });
//   }
// });

// console.log(1);
// fetch("./data/mohamed.json")
//   .then((data) => {
//     console.log(data);
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(2);

// const getTodos = async () => {
//   try {
//     const response = await fetch("./data/mohamed.json");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getTodos();

function outerFunction() {
  const outerVariables = 1;
  return function innerFunction() {
    const innerVaribales = 2;
    console.log(outerVariables);
    console.log(innerVaribales);
  };
}

const innerF = outerFunction();
innerF();
