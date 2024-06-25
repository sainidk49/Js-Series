// ======================= singleton ======================
// const user = new Object() ////////// singleton
// const user = {} ////////// non-singleton




// =================== object literals ===================
// const keyValue = Symbol()
// const user = {
//     name: "deepak",
//     age: 26,
//     [keyValue]: "dpksaini49",
//     email: "dpksaini49@gmail.com",
//     geneder: "male",
//     isLogedIn: false,
//     days: ["monday", "Tuesday"]
// }
// console.log(user.email) // return => dpksaini49@gmail.com
// console.log(user["email"]) // return => dpksaini49@gmail.com
// console.log(user.days[1])
// console.log(user[keyValue])

// user.name = "dk saini"; //change the value  
// console.log(user)

// // if you dont allow to anyone to change object value. So you can freeze to object 
// Object.freeze(user) // it lock the object you can't change after use this method
// user.name = "dpk saini";
// console.log(user)

// ========================= funtion Object ============================
// let user = {
//     name : "dk saini",
//     age: 27,
//     usename : "sdk958819",
//     userDetails : function(){
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.usename)
//     }
// }
// user.userDetails()

// =================== nested object ======================
// let userDetails = {
//     user : {
//         name : {
//             firstname : "deepak",
//             lastname: "saini"
//         },
//         age: 26,
//         email : "dpksaini49@gmail.com"

//     },
//     college: "Maharaza college of Enggineering"
// }
// console.log(userDetails.user.name.firstname)

// =================== concatenate object ======================
// let userPersondalDetails = {
//     name: "deepak",
//     age: 27,
//     email: "deepak@atthah.com"
// }

// let userOtherDetails = {
//     college: "engineering college",
//     location: "gajroula"
// }

// let concatenate = {...userOtherDetails, ...userPersondalDetails} // merge two object and called => Speard Array
// console.log(concatenate)

// let concatenate = Object.assign({}, userPersondalDetails, userOtherDetails)
// console.log(concatenate) // merge two object

// console.log(Object.keys(userPersondalDetails)) // retturn => [ 'name', 'age', 'email' ]
// console.log(Object.values(userPersondalDetails)) // retturn => [ 'deeepa', 27, 'deepak@atthah.com' ]
// console.log(Object.entries(userPersondalDetails)) // make the pare of array key and value as given blow
// retturn => 
// [
//   [ 'name', 'deepak' ],
//   [ 'age', 27 ],       
//   [ 'email', 'deepak@atthah.com' ]
// ]


// ================= check value exist or not in object  ===============
// console.log(userPersondalDetails.hasOwnProperty("name")) // return true
// console.log(userPersondalDetails.hasOwnProperty("username")) // return false


// =================== de-structure object ======================
// let userPersondalDetails = {
//     username: "deepak",
//     age: 27,
//     email: "deepak@atthah.com",
//     college: "engineering college",
//     location: "gajroula"
// }
// // let { age } = userPersondalDetails /// store the value of object in a variable
// let { username : name } = userPersondalDetails /// change the key name
