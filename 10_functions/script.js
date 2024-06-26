// paramters
// function addNum(num1, num2) { 
//     console.log(num1 + num2)
// }
//     // arguments or value
// addNum(5, 3)


// ============================= Rest Operator ========================
// function printNum(...num) {
//     return num
// }
// console.log(printNum(100, 200, 400)) // return array => [ 100, 200, 400 ]


// function printNum(num1, num2, ...num) {
//     return num
// }
// console.log(printNum(100, 200, 400, 500)) // return array => [ 400, 500 ], becouse other paramters grap own value


// =========================== pass the object =======================
// const user = {
//     fname : "deepak",
//     age : 26,
//     email: "dpksaini49"
// }

// function userInfo(obj){
//     return `hello my name is ${obj.name} and i am ${obj?.age} years old. my email is ${obj?.email}`
// }
// console.log(userInfo(user))


// =========================== use hoisting ======================= 
console.log(Fun1(5)) // return => 5
function Fun1(num){
    return num
}

// console.log(storeVal(5)) // return => Cannot access 'storeVal' before initialization // it's called hoisting
const storeVal = function(num){
    return num
}
console.log(storeVal(5)) // return => 5 now it's working