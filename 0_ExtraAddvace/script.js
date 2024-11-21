// ============== Arguments ==============
// function sum1(num1, num2){
//     return arguments[0]+ arguments[1]
// }
// console.log(sum1(50, 20)) ////// return => 70


// function sum2(num1, num2){
//     num1 = 500;
//     num2 = 200;
//     return arguments[0]+ arguments[1]
// }
// console.log(sum2(50, 20)) ////// return => 700


// function sum3(num1, num2){
//     "use strict";
//     num1 = 500;
//     num2 = 200;
//     return arguments[0]+ arguments[1]
// }
// console.log(sum3(50, 20)) ////// return => 70




// ============================ Array =========================
// let arr = [{}, 2, ""]
// arr.pop(0) //// remove value from last and decrease array length
// delete arr[1] //// return [ {}, <1 empty item>, '' ] and length is 3
// console.log(arr)
// console.log(arr.length)


// console.log((true + "")[2]) //retrun 'u' = index of string of true


// const arr = ["name"]
// let obj = {}
// obj.name = "dk"
// obj[arr] = "deepak"
// console.log(obj.name)// return => deepak




// ====================== new keyword =========================
// const User = () =>{
//     this.name = "deepak"
//     return this
// }
// let user = new Usee() 
// console.log(user.name) /// new keyword is not working with arraw fn


// function User(){
//     this.name = "deepak"
//     return this
// }
// let user = new User();
// console.log(user.name) /// working




// ================== Block scope ====================
// {
//     function printMe(){
//         console.log("hello deepak")
//     }
// }
// printMe(); ////// method called


// "use strict";
// {
//     function printMe(){
//         console.log("hello deepak")
//     }
// }
// printMe(); ////// method not called by using strick mode

console.log([] == "") // return true