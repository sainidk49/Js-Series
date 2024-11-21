// ================= Describe Call Methud ================
let obj1 = {
    name: "deepak",
    age: 27,
    email: "dpksaini49@gmail.com",
    fetchDetail1: function(){
        console.log(this.age)
    }
}
let obj2 = {
    name: "ajay",
    age: 23,
    email: "ajaybisht@gmail.com",
}
// obj1.fetchDetail1()
// obj1.fetchDetail1.call(obj2) ///// => same result
// obj1.fetchDetail1.apply(obj2) ///// => same result
// const bind = obj1.fetchDetail1.bind(obj2) ///// => same result
// bind()
/// also can be use function as indivisual with call 



// function fetchDetail2(name, email){
//     console.log(name, email, this.age)
// }
// fetchDetail2.call(obj1, "rahul", "rahul@gmail.com") ////=> pass the parameters
// fetchDetail2.call(obj2, "rekha", "rekha@gmail.com") ////=> pass the parameters


// ================= With apply Methud ================
function fetchDetail2(name, email){
    console.log(name, email, this.age)
}
fetchDetail2.apply(obj1, ["rahul", "rahul@gmail.com"]) //=> pass the array
fetchDetail2.apply(obj2, ["rekha", "rekha@gmail.com"]) //=> pass the array


// ================= With bind Methud ================
// function fetchDetail2(name, email){
//     console.log(name, email, this.age)
// }
// let fun1 = fetchDetail2.bind(obj1, "rahul", "rahul@gmail.com") //=> store in variable and call where you want it takes parametr not array
// let fun2 = fetchDetail2.bind(obj2, "rekha", "rekha@gmail.com") //=> store in variable and call where you want it takes parametr not array
// fun1()
// fun2()