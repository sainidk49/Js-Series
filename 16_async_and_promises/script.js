
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

async function getDataThen() {
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then((user) => user.json())
        .then((userJsonData)=>{
            userJsonData.map((user)=>{
                console.log(user.id)
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
getDataThen()