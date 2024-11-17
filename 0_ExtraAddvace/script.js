// // ============== Arguments ==============
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




//// ============================ Array =========================
// let arr = [{}, 2, ""]
// // arr.pop(0) //// remove value from last and decrease array length
// delete arr[1] //// return [ {}, <1 empty item>, '' ] and length is 3 // delete is an operation
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
// let user = new User() 
// console.log(user.name) /// new keyword is not working with arraw fn


// function User(){
//     this.name = "deepak"
//     return this
// }
// let user = new User();
// console.log(user.name) /// working


// function User(name, age) {
//     // this.name = name; 
//     // this.age = age; 
// }

// let user = new User("deepak", 25); /// new keyword make a object and put value in that obj and return whole obj
// console.log(user); //// => User { name: 'deepak', age: 25 }


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }
// }
// let user = new User("deepak", 25); 
// console.log(user) ///// same return => User { name: 'deepak', age: 25 }



// let age = 35
// const User = {
//     name:"deepak",
//     age: 26,
//     fnName: function(){
//         return age //// return => 235
//         return this.age //// return => 26 
//     }
// }
// console.log(User.fnName())


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

// console.log([] == "") // return true

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     animal() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call the parent class constructor
//         this.breed = breed;
//     }

//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// let dog = new Dog('Buddy', 'Golden Retriever');
// dog.speak();
// dog.animal(); 


// ===========  inject prototype ==============
// Object.prototype.truelength = function(){
//     return this.length
// }
// let arr = [1,2,3,4]
// console.log(arr.truelength())

// String.prototype.truelength = function(){
//     return this.trim().length
// }
// let name = "deepak       ";
// console.log(name.truelength())
