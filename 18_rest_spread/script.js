// =================== Rest Operator ===============
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// function resSpreadNum(a, b, c, ...all) {
//     console.log(a + b + c)
//     return all

// }
// console.log(resSpreadNum(...numArr))



// =================== Spread Operator =============
let array = ["deepak", "ajay", "sonu", "raj"]
let obj1 = {
    name: "deepak",
    age: 27,
    email: "dpksaini49@gmail.com",
}
let obj2 = {
    ...obj1,
    email: "deepak@atthah.com"
}


console.log(obj1)
console.log(obj2)