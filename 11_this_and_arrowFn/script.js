// ================ normal function in object ===================
// let username ="ck"
// let user = {
//     username: "deepak",
//     age : 26,
//     welcomeUer : function(){
//         console.log(this) // return => { username: 'deepak', age: 26, welcomeUer: [Function: welcomeUer] }
//         console.log(username) // return => ck
//         console.log(this.username) // return => deepak
//     }
// }
// user.welcomeUer()


// ================ arrow function in object ===================
// let username = "ck"
// let user = {
//     username: "deepak",
//     age: 26,
//     welcomeUer: () => {
//         console.log(this) // return => {}
//         console.log(username) // return => ck
//         console.log(this.username) // return => undefined
//     }
// }
// user.welcomeUer()
// console.log(this) // return => {}
// if this keyword use in browser it return context of browser window


// ================ normal function ===================
// function useThisInFun(){
//     let username = "deepak"
//     console.log(this) // return function object properties
//     console.log(this.username) // cant be access value in a funtion it only use in object or a class
// }
// useThisInFun()


// ================ arrow function ===================
// const useThisInFun = () =>{
//     let username = "deepak"
//     console.log(this) // return {}
//     console.log(this.username) // cant be access value in a funtion it only use in object or a class
// }
// useThisInFun()


// ================ arrow function ===================
// const addSum = (num1, num2) =>{
//     return num1+ num2
// }
// console.log(addSum(2, 5))


// const addSum = (num1, num2) => num1 + num2 // call implicit return // no need to use return
// console.log(addSum(2, 5))


// const addSum = (num1, num2) => (num1 + num2) // use also parentheses
// console.log(addSum(2, 5))


// const returnObj = (num1, num2) => ({user : "deepak"}) // return obj like this
// console.log(returnObj())