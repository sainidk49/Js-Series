// let arr1 = ["deepak", "ajay", "yash", "raj", "sonu"];
// console.log(arr1) // return=>["deepak", "ajay", "yash", "raj", "sonu"]
// let arr2 = arr1;
// arr2[2] = "akshay"; // changed original array
// console.log(arr1) // return=>[ 'deepak', 'ajay', 'akshay', 'raj', 'sonu' ] 
// console.log(arr2) // return=>[ 'deepak', 'ajay', 'akshay', 'raj', 'sonu' ] 


// =========================== methods =============================

// ************* push *****************
// let arr1 = [1, 2, 3, 4, 5]
// arr1.push(6)
// arr1.push(7)
// console.log(arr1) // return=> [1, 2, 3, 4, 5, 6, 7]


// ************* pop *****************
// let arr1 = [1, 2, 3, 4, 5]
// arr1.pop() //remove last value
// console.log(arr1) // return=> [ 1, 2, 3, 4 ]


// ************* unshift *****************
// let arr1 = [1, 2, 3, 4, 5]
// arr1.unshift(9) //add the value at starting
// console.log(arr1) // return=> [ 9, 1, 2, 3, 4, 5 ]


// ************* shift *****************
// let arr1 = [1, 2, 3, 4, 5]
// arr1.shift() // remove vlaue from starting
// console.log(arr1) // return=> [ 2, 3, 4, 5 ]



// ************* includes and indexOf  methods *****************
// let arr1 = [1, 2, 3, 4, 5]
// console.log(arr1.includes(3)) // return => true
// console.log(arr1.indexOf(3)) // return => 2


// ************* slice *****************
// let arr1 = [1, 2, 3, 4, 5]
// // let arr2 = arr1.slice() // its make a copy of array
// let arr2 = arr1.slice(1, 4) // take a range value from start point to end point
// console.log(arr1) // return=> [ 1, 2, 3, 4, 5 ]
// console.log(arr2) // return=> [ 2, 3, 4 ]


// ************* splice *****************
// let arr1 = [1, 2, 3, 4, 5]
// // let arr2 = arr1.splice() // its make blank array
// let arr2 = arr1.splice(1, 4) // grab the elements from start point to end point
// console.log(arr1) // return => [ 1 ]
// console.log(arr2) // return => [ 2, 3, 4, 5 ]


// ==================== addvance array =====================

// let arr1 = ["ajay", "deepak", "rahul"]
// let arr2 = ["roshan", "rahini", "shiva"]


// arr1.push(arr2) // it make nasted array. put as a child array at last index
// console.log(arr1) // return => [ 'ajay', 'deepak', 'rahul', ['roshan', 'rahini', 'shiva'] ]


// let arr3 = arr1.concat(arr2) // it merge the array
// console.log(arr3) // return => [ 'ajay', 'deepak', 'rahul', 'roshan', 'rahini', 'shiva' ]


// let arr3 = [...arr1, ...arr2] // merge two array and called => Speard Array
// console.log(arr3) // return => [ 'ajay', 'deepak', 'rahul', 'roshan', 'rahini', 'shiva' ]


// let nestedArray = [1, 2, [3, 4], 5, [6, 7, [8, 9]]]
// let flatArr = nestedArray.flat(Infinity) // concatenate all sub array call => flat method
// console.log(flatArr) //return => [1, 2, 3, 4, 5, 6, 7, 8, 9]


// ===================== convert into a array ================================
// console.log(Array.from("Deepak")) // return=> [ 'D', 'e', 'e', 'p', 'a', 'k' ]

let el1 = 100;
let el2 = 200;
let el3 = 300;
console.log(Array.of(el1, el2, el3)) // return=> [ 100, 200, 300 ]

