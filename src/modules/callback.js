import axios from "axios";

// // şu kadar süre sonra calisir
// setTimeout(() => {
//   console.log("maraba");
// }, 2000);

// // belirli aralıklarla calisir
// setInterval(() => {
//   console.log("her saniye calisir");
// }, 1000);

// const sayHello = () => {
//   console.log("merhabar");
// };

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("users yuklendi", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((data) =>
//       data.json().then((post1) => {
//         console.log("post 1 yuklendi ", post1);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((post2) => {
//             console.log("post2 yuklendi ", post2);

//             fetch("https://jsonplaceholder.typicode.com/posts/3")
//               .then((data) => data.json())
//               .then((post3) => {
//                 console.log("post3 yuklendi ", post3);
//               });
//           });
//       })
//     );
//   });

// ÜSTTEKİ İLE AYNI KOD

// async function getData() {
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   console.log(post1);
//   console.log(post2);
// }

// getData();

// anonim fonksiyon direkt calistirmak icin. üsttekiyle aynı.

// (async () => {
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   console.log(post1);
//   console.log(post2);
// })();

//  AXİOS İLE 2 ÜSTTEKİ . KODLA AYNI

// async function getData2() {
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   console.log(post1);
//   console.log(post2);
// }

// getData2();

// Promise kullanımı

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    resolve(data);
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
  })
};

// bunları sıraya koymak icin asenkron fonk
(async () => {
  await getUsers()
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });

  for (let index = 1; index < 4; index++) {
    await getPost(index)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
})();
