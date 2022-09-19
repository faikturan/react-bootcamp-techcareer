// setTimeout(()=>{
//    console.log("Merhaba") 
// }, 5000)

// setInterval(()=>{
//     console.log("Merhaba ben her saniye çalışacağım.")
// }, 1000)


// const sayHi = (cb) =>{
//     cb();
// }

// sayHi(() =>{
//     console.log("Helllo")
// });

import fetch from "node-fetch";
import axios from  "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) =>{
//     console.log("Users Yuklendi!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((post) =>{
//     console.log("Post 1 Yuklendi!", post);

//     fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then((data) => data.json())
//     .then((data) =>{
//     console.log("Post 2 Yuklendi!", data);
// });

// });

// });



// const getUsers = () =>{
//     return new Promise(async(resolve, reject) =>{
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users");

//         resolve(data);

//         //reject("Bir sorun oluştu.");
//     })
// }

// const getPost = (post_id) =>{
//     return new Promise(async(resolve, reject) =>{
//         const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);

//         resolve(data);

//         //reject("Bir sorun oluştu.");
//     })
// }

// // (async () =>{
// //     try {
// //         const users = await getUsers;
// //         const post = await getPost;


// //         console.log(users);
// //         console.log(post);

// //     } catch (e) {
// //         console.log(e);
// //     }
// // })

// Promise.all([getUsers(), getPost(1)])
// .then(console.log)
// .catch(console.log)

// console.log("Hello,");
// const syncExample = () => {
//   console.log("How are you?");
// };
// syncExample();
// console.log("World.");

// console.log("Hello,");

//  const asyncExample = () => {
//    setTimeout(() => {
//      console.log("How are you?");
//    }, 3000);
//  };
//  asyncExample();
//  console.log("World.");


async function getData(){
    const users = await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);

}

getData();