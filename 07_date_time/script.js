
let myDate = new Date();
// console.log(myDate.toString()) // return => Mon Jun 24 2024 12:58:50 GMT+0530 (India Standard Time)

// console.log(myDate.toTimeString()) // return => 12:58:50 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()) // return => Mon Jun 24 2024

// console.log(myDate.toISOString()) // return => 2024-06-24T07:31:10.347Z

// console.log(myDate.toLocaleString()) // return => 24/6/2024, 1:02:47 pm

// console.log(myDate.toLocaleTimeString()) // return => 1:03:10 pm

// console.log(myDate.toLocaleDateString()) // return => 24/6/2024



// ==================== create custome date ==================
// let myCreatedDate = new Date(2023, 0, 28);
// console.log(myCreatedDate.toLocaleDateString()) // return => 28/1/2023

// let myCreatedDate = new Date(2023, 0, 28, 5, 3);
// console.log(myCreatedDate.toLocaleTimeString()) // return => 5:03:00 am

// let createdDate = new Date("2023-01-15")
// console.log(createdDate.toLocaleDateString()) // return => 15/1/2023



// ==================== Time stamp =========================
// let timeStamp = Date.now()
// let bookDate = new Date("01-14-2023").getTime()
// console.log(`timeStamp : ${timeStamp} :: bookDate : ${bookDate}`)


let date = new Date()
/// numeric
let currentDate = date.toLocaleString("default",{
    day: "numeric",
    month: "numeric",
    year: "numeric"
})
console.log(currentDate) // return => 24/6/202424/6/2024

/// long 
// let currentDate = date.toLocaleString("default", {
//     day: "numeric",
//     month: "long",
//     year: "numeric"
// })
// console.log(currentDate) // return => 24 June 2024