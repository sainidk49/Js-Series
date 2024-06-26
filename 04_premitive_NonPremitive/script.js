// ========== Premitive Data type ==========
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// let id = Symbol("123")  //=> return "Symbol('123')"
// let uniqueId = Symbol("123") //=> return "Symbol('123')"
// console.log(uniqueId === id) //=> return "false"


// ========== Reference => Non-Premitive Data type ==========
// 3 types : Array, Objects, Functions

// let listArr = ["Dk", "Ajay", "Yash", "Raj"]

// let user = {
//     name: "deepak",
//     age: 26,
//     email: "dpksaini49@gmail.com"
// }

// let fun = function(){
//     console.log("hello world")
// }

// console.log(typeof listArr) // => object
// console.log(typeof user) // => object
// console.log(typeof fun) // => function


/// ====== Stack (Premitive) and Heap(Non-Premitive) ============

// let value1 = "dksaini"
// let value2 = value1;
// value2 = "dpksaini"
// console.log(`value1: ${value1} :: value2 ${value2}`) // => its make a copy or variable in Stack


// let user1 = {
//     name : "deepak",
//     age: 26
// }
// let user2 = user1
// user2.name = "dksaini";
// user2.age = 27;
// console.log(user1) // => its make the change in original object
// console.log(user2) // => return same value