
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let user = {
    name: "deepak",
    age: 27,
    email: "dpksaini",
    married: false

}

// ============== while loop ====================
// let index = 0;
// while (index < arrNum.length) {
//     console.log(arrNum[index])
//     index++
// }


// ============== do while loop ====================
// let index = 0;
// do {
//     console.log(arrNum[index])
//     index++
// } while (index < arrNum.length) 
// ============== for loop ====================
// for (let index = 0; index < arrNum.length; index++) {
//     const element = arrNum[index];
//     console.log(`Index : ${index} :: Value : ${element}`)
// }


// ============== use break and continue ====================
// for (let index = 0; index < arrNum.length; index++) {
//     console.log(arrNum[index])
//     if(arrNum[index] === 5){
//         break;
//     }
// } 


// for (let index = 0; index < arrNum.length; index++) {
//     console.log(arrNum[index])
//     if(arrNum[index] === 5){
//         continue;
//     }
// }


// ===================== for of ===========================
// for (const num of arrNum) {
//     console.log(num)
//     // if(num === 5){
//     //     break
//     // }
// } => it only use for array, map and string


// =============== use in map for of =====================
// const map = new Map()
// map.set("IN","India")
// map.set("Fr","France")
// map.set("USA","United States of America")
// // map.set("IN","India") // it's not allow to use duplicate value 
// for (const [key, value] of map) {
//     console.log(key+" :: "+value)
// } //=> it only use for array, map and string


// ==================== for in with array ==========================
// for (const index in arrNum) {
//    console.log(`index : ${index} :: value : ${arrNum[index]}`)
// }


// ==================== for in with array ==========================
// for (const info in user) {
//    console.log(`${info} :: ${user[info]}`)
// }


// ====================== Foreach loop ============================
// arrNum.forEach((value, index) => {
//     console.log(`index : ${index} :: value : ${value}`)
// })

// function fetchVal(value, index){
//     console.log(`index : ${index} :: value : ${value}`)
// }
// arrNum.forEach(fetchVal)
