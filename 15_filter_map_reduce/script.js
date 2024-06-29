// const techArr = ["js", "react", "java", "javaScript", "python", "C++"];
// const values = techArr.forEach((item)=>{
//     console.log(item)
//     return item
// }) //////////// foreach dose'nt retun value


// ========================== filter =============================

// const techArr = ["js", "react", "java", "javaScript", "python", "C++"];
// const fetchValue = techArr.filter((value) =>  value === "java"); 
// console.log(fetchValue) //return => value in array :- [ 'java' ]


// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
// const fetchValues = numArr.filter((num)=> num > 5)
// console.log(fetchValues) // return [ 6, 7, 8, 9 ]


// const dataObjArr = [
//     {
//         name: "deepak",
//         age: 26,
//         location: "rampur"
//     },
//     {
//         name: "Yash",
//         age: 22,
//         location: "kanpur"
//     },
//     {
//         name: "ajay",
//         age: 23,
//         location: "dehradun"
//     },
//     {
//         name: "Raj",
//         age: 27,
//         location: "Rajishthan"
//     },
// ]
// const fetchValues = dataObjArr.filter(data => {{
//     return data.age > 23
// }})
// console.log(fetchValues)


// ========================== map =============================

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16];
// const mapValue = numArr.map((num) => num) 
// console.log(mapValue) // retun => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16]


// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16];
// const filterArr = numArr
//     .map((num) => num * 10) // return like this
//     .map((num) => (num + 1)) // return like this
//     .filter((num) => {return num > 40 && 80 > num}) // return like this
// console.log(filterArr)


// ========================== reduce ============================
// const numArr = [1, 2, 3, 4]
// let initialValue = 0
// const totalNum = numArr.reduce((accumulator, currentValue) => {
//     // console.log(`acc : ${accumulator} :: currentVal : ${currentValue}`)
//     return accumulator + currentValue
// }, initialValue)
// console.log(totalNum) // return => 10


const dataObjArr = [
    {
        name: "ball",
        price: 26,
    },
    {
        name: "watch",
        price: 22,
    },
    {
        name: "book",
        price: 23,
    },
    {
        name: "pen",
        price: 27,

    },
]
const totalPrice = dataObjArr.reduce((acc, item) => {
    // console.log(`acc : ${accumulator} :: currentVal : ${currentValue}`)
    return acc + item.price
}, 0)
console.log(totalPrice) // return => 10
