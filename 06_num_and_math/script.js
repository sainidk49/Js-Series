// const score = 400;
// console.log(score); // 400
// console.log(typeof score); // Number


// const balance = new Number(1000)
// console.log(balance) // [Number : 1000]
// console.log(typeof balance) // object
// console.log(balance.toFixed(2)) // 1000.00 commonly use for Ecommerce


// const floatNum = 123.8966
// console.log(floatNum.toPrecision(3))


// const ruppes = 1000000
// console.log(ruppes.toLocaleString()) //  return => 10,00,000


// ==================== Maths ============================= 
// console.log(Math)
// const mathNum = Math.abs(4) // return 4
// const mathNum = Math.abs(-4) // also return 4 it change negative value to positive 
// const mathNum = Math.round(4.4) // its make in a round figur numer 4.4 = 4 and 4.5 < 5 = 5
// const mathNum = Math.ceil(4.2) // if 4 to 5 return 5
// const mathNum = Math.floor(4.6) // if 4 to 5 return 4
// const mathNum = Math.sqrt(16) // return 4
// console.log(mathNum)


// ==================== Math.random ============================= 
const min = 1
const max = 10;
// Math.random() // return 0 to 0.9
// Math.floor() // remove number after demimal
console.log(Math.floor(Math.random() * max + min)) //  return 1 to 10 random number
// console.log(Math.floor(Math.random() * (max - min + 1)) + 1) //  return 1 to 10 random number