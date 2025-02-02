
// // ======================== chaining promise return ==================
// const promise1 = new Promise((resolve, reject) => {
//     // let userError = true;
//     let userError = false;
//     let user = { username: "deepak", age: 27, email: "dpksaini49" }
//     if (!userError) {
//         resolve(user)
//     }
//     else {
//         reject("this is custome error")
//     }
// })
// promise1
//     .then((user) => {
//         console.log(user)
//         return user.username
//     })
//     .then((username) => {
//         console.log(username)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// // ======================== async await  ==================
// const promise2 = new Promise((resolve, reject) => {
//     let userError = true;
//     // let userError = false;
//     let user = { username: "deepak", age: 27, email: "dpksaini49" }
//     if (!userError) {
//         resolve(user)
//     }
//     else {
//         reject("this is custome error")
//     }
// })

// async function callApi() {
//     try{
//         const response = await promise2
//         console.log(response)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// callApi()


// ======================== call api async await  ==================
// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json() // need await also this
//     console.log(data)
// }
// getData()

// async function getDataThen() {
//     await fetch("https://jsonplaceholder.typicode.com/users")
//         .then((user) => user.json())
//         .then((userJsonData) => {
//             userJsonData.map((user) => {
//                 console.log(user.name)
//             })
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//         .finally(() => console.log("hello world"))
// }
// getDataThen()


/// Promise.all() allows you to run multiple promises in parallel 
// and wait for all of them to either resolve or reject.
// let promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
// let promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
// // let promise2 = new Promise((_, reject) => setTimeout(reject, 200, 'Error in Second'));
// Promise.all([promise1, promise2])
//     .then((results) => {
//         console.log(results); //[ 'First', 'Second' ]
//     })
//     .catch((error) => {
//         console.log(error);  // Logs: "Error in Second"
//     });



///// Promise.allSettled() is similar to Promise.all(), 
// but it waits for all promises to settle (either resolve or reject), 
// and returns an array with the results of all promises.

// let promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'Success'));
// let promise2 = new Promise((_, reject) => setTimeout(reject, 200, 'Failed'));
// Promise.allSettled([promise1, promise2])
//     .then((results) => {
//         console.log(results);
//         // [
//         //   { status: 'fulfilled', value: 'Success' },
//         //   { status: 'rejected', reason: 'Failed' }
//         // ]
//     });



////////// Promise.race() returns the result of the first promise that settles
// (either resolves or rejects), and ignores the rest.
let promise1 = new Promise((resolve) => setTimeout(resolve, 200, 'First'));
let promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Second'));
Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);  //// 'Second'
  });
