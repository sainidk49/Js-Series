
///// get intersect from two shorted array
function intersect() {
    let arr1 = [0, 2, 5, 6, 7, 7, 7, 8]
    let arr2 = [3, 5, 7, 7, 8, 9]
    let intersect = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            intersect.push(arr1[i])
            i++;
            j++
        }
        else if (arr1[i] < arr2[j]) {
            i++
        }
        else {
            j++
        }
    }
    console.log(intersect)
}
// intersect() //==> Fun calling here!


//////////////// short the array ////////////////
function shortArray() {
    let arr1 = [5, 4, 6, 3, 10, 9, 15, 14]
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length - 1 - i; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp
            }
        }
    }
    console.log(arr1)
}
// shortArray() //==> Fun calling here!


///////////// check character count ////////////
function characterCount() {
    let str = "deepak saini";
    let obj = {};
    for (const x of str) {
        if (x !== " ") {
            if (obj[x]) {
                obj[x] += 1;
            }
            else {
                obj[x] = 1;
            }
        }

    }
    console.log(obj);
}
// characterCount() //==> Fun calling here!


///////////// find same key element ////////////
function sameKeyElem() {
    let objArr = [
        { key: "sample1", data: "data1" },
        { key: "sample4", data: "data4" },
        { key: "sample4", data: "data4" },
        { key: "sample3", data: "data3" },
        { key: "sample1", data: "data1" },
        { key: "sample2", data: "data2" },
        { key: "sample1", data: "data1" },
    ];
    let output = {}
    for (const item of objArr) {
        if (output[item.key]) {
            output[item.key].push(item)
        }
        else {
            output[item.key] = [item]
        }
    }
    console.log(output)
}
// sameKeyElem() //==> Fun calling here!


///////////// convert array to object ///////////
function convertArrToObj() {
    let nameArr = ["deepak", "sonu", "ajay"];
    let obj = {}
    nameArr.forEach((name, index) => {
        obj[index] = name
    })
    console.log(obj)
}
// convertArrToObj() //==> Fun calling here!


///////////// Callback Fn ///////////
function Callback(a, b, fn) {
    return fn(a, b)
}
function add(a, b) {
    return a + b
}
function multi(a, b) {
    return a * b
}
// console.log(Callback(1, 3, multi)) //===> calling here



////////////////// Memorize function ///////////////
function memorize(fn) {
    const cache = new Map()
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            const result = cache.get(key)
            const { value, callback } = result;
            callback("Return from cache", value)
            return
        }
        const result = fn(...args)
        cache.set(key, result)
        const { value, callback } = result;
        callback("New result", value)

    }
}

function AddValue(a, b, callback) {
    let value = a + b;
    return { value, callback };
}

const memoizeFun = memorize(AddValue)

// memoizeFun(2, 5, (message, value) => {
//     console.log("a", message, value)
// })

// memoizeFun(2, 9, (message, value) => {
//     console.log("b", message, value)
// })

// memoizeFun(2, 9, (message, value) => {
//     console.log("c", message, value)
// })


// ============== chain method ===================
function computeAmount() {
    let total = 0
    return {

        crore: function (value) {
            total += value * 10000000
            return this  ////// allow to channing
        },
        lacs: function (value) {
            total += value * 100000

            return this ////// allow to channing
        },
        thousand: function (value) {
            total += value * 1000
            return this ////// allow to channing
        },
        value: function () {
            return total
        }

    }
}
// console.log(computeAmount().lacs(12).thousand(5).lacs(12).value())
// console.log(computeAmount().lacs(15).thousand(5).value())


////////////////// flatten array ///////////////
const nestedArr = [1, 2, 3, [4, [5, 6]], 7, 8]
// const flattenArr = nestedArr.flat(Infinity)
// console.log(flattenArr)
const flattenArr = [];
function flatten(a) {
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            flatten(a[i])
        }
        else {
            flattenArr.push(a[i])
        }
    }
    return flattenArr
}
// console.log(flatten(nestedArr)) //==> calling here


///////////// capitalize words /////////////
function capitalizeWord(str) {
    return str.split(" ").map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')
}
// console.log(capitalizeWord("hello world"))


/////////// reverse words /////////////
function reverseWord(str) {
    // return str.split('').reverse().join('')
    let reverseStr = ''
    for (let index = str.length - 1; index >= 0; index--) {
        reverseStr += str[index];
    }
    return reverseStr
}
// console.log(reverseWord("helloworld"))


/////////////////// nullish Coaescing ///////////////
function nullishCoaescing(person) {
    let user = person?.name ?? "Deepak";
    console.log(user)
}
// nullishCoaescing({ name: undefined })


/////////////////// get unique value ///////////////
function getUniqueValues(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}
// console.log(getUniqueValues([1, 2, 2, 3, 4, 4, 5])) //// return => [ 1, 2, 3, 4, 5 ]


/////////////////// create count function  ///////////////
//// => whenever count function call value will be increase and 
// also make reset function that will reset value as initial value
const count = (() => {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter)
    }
    inner.reset = () => {
        counter = 0
    }

    return inner
})();
// count() // return => 1
// count() // return => 2
// count() // return => 3
// count.reset() // reset value as 0
// count() // return => 1


////////////// make a fuction which divide array in subarray as user want ///////////
/////// => like [[1], [2], [3], [4], [5]]

/////// => like [[1 ,2], [3, 4], [5]]

/////// => like [[1 ,2, 3,] [4, 5]]

/////// => like [[1 ,2, 3, 4 ], [5]]

/////// => like [[1 ,2, 3, 4, 5]]

let numberArr = [1, 2, 3, 4, 5]
function makeSubArr(arr, size) {
    if (arr.length >= size) {
        let result = [],
            subArr = [];
        for (let index = 0; index < arr.length; index++) {
            subArr.push(arr[index])
            if (subArr.length === size || index === arr.length - 1) {
                result.push(subArr);
                subArr = []
            }
        }
        console.log(result)
        return result
    }
    else {
        console.log("Please input vaid size of sub-array.")
        return null
    }
}
// console.log(makeSubArr(numberArr, 4)) //// return=> [ [ 1, 2, 3, 4 ], [ 5 ] ]


////////////////// print finally value ///////////////
const data = new Promise((res, rej) => res(2));
// data.then(val => {
//     console.log(val)
//     return val * 2
// }).then(val => {
//     console.log(val)
//     return val * 2
// }).then(val => {
//     console.log(val)
//     return 2
// }).finally((val) => {
//     console.log(val)
// })
// return => 2 4 8 undefined


////////////////// convert arr to obj by spread ///////////////
const objArr = [1, 2, 3, 4, 5]
objArr["foo"] = 24;
const convertObj = { ...objArr }
// console.log(convertObj) //return=> { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, foo: 24 }


////////////////// geter and seter ///////////////
let state = {
    value: undefined,
    setValue(val) {
        this.value = val;
    },
    getValue() {
        return this.value;
    }
};

const stateArr = [() => state.value, (val) => state.setValue(val)];
const [getCount, setCount] = stateArr;
setCount(5);
// console.log(getCount()); // => 5


////=================== campare objects ================
const user1 = {
    name: "deepak",
    age: 26,
    married: true,
    date: new Date("2021-03-25"),
    child: { x: 16, y: 62 },
    bikes: ["splender", "mt15"],
}

const user2 = {
    name: "deepak",
    married: true,
    age: 26,
    date: new Date("2021-03-25"),
    child: { y: 62, x: 16 },
    bikes: ["splender", "mt15"],
}


function campare(obj1, obj2) {
    ///// it is working if key is same sequence ////////
    // if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {
    //     return false
    // }

    if (typeof obj1 !== "object" || obj1 === null && typeof obj2 !== "object" || obj2 === null) {
        return false
    }

    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)

    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }

    for (const key of obj1Keys) {
        if (!obj2.hasOwnProperty(key)) {
            return false
        }

        else if (obj1[key] instanceof Date && obj2[key] instanceof Date) {
            if (obj1[key].getTime() !== obj2[key].getTime()) {
                return false
            }
        }

        else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {

            if (!campare(obj1[key], obj2[key])) {
                return false
            }
        }

        else if (obj1[key] !== obj2[key]) {
            return false
        }

    }

    return true
}
// console.log(campare(user1, user2)) //// retrun => ture/false



////============== polyfill of map, and  filter ===========
const polyfillArr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 5]

//// example of map => arr.map((value, index, self) => value * 5)
Object.prototype.myMap = function (cb) {
    let dummyArr = [];
    for (let i = 0; i < this.length; i++) {
        dummyArr.push(cb(this[i], i, this));
    }
    return dummyArr;
}
const mapArr = polyfillArr.myMap((value) => value * 5);
// console.log(mapArr);


//// example of filter =>  arr.filter(item => item > 5)
Object.prototype.myFilter = function (cb) {
    let dummyArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            dummyArr.push(this[i]);
        }
    }
    return dummyArr;
}
const filterArr = polyfillArr.myFilter((value, index, self) => self.indexOf(value) === index);
// console.log(filterArr);


//// example of reduce =>  arr.reduce((acc, cur) =>  return acc + cur, 10)
Object.prototype.myReducer = function (cb, intialValue) {
    let acc = intialValue
    for (let index = 0; index < this.length; index++) {
        acc = acc ? cb(acc, this[index]) : this[index]
    }
    return acc
}
const resultAdd = polyfillArr.myReducer((acc, cur) => acc + cur, 10)
// console.log(resultAdd)


////==============  call, apply and bind ===========
const polyfillObj = {
    company: "atthah",
    address: "sector 58"
}

function info(name, email) {
    console.log(`Hi, my name is ${name} and email ${email}. I working with ${this.company} in ${this.address}`)
}

//// example of call => info.call(polyfillObj, "deepak", "dpksaini49");

Object.prototype.myCall = function(object, ...args){
    object.myFn = this
    object.this(...args)
}

info.myCall(polyfillObj, "deepak", "dpksaini49");


//// example of apply => info.apply(polyfillObj, ["deepak", "dpksaini49"]);
Object.prototype.myApply = function(object, arr){
    object.myFn = this
    object.myFn(...arr)
}
// info.myApply(polyfillObj, ["deepak", "dpksaini49"]);


//// example of bind => info.bind(polyfillObj, "deepak", "dpksaini49");
Object.prototype.mybind = function(obj, ...args){
    obj.myFn = this;
    return function(){
        obj.myFn(...args)
    }
}
const fn2 = info.mybind(polyfillObj, "deepak", "dpksaini49");
fn2()


/////////////// sort number and string /////////
// console.log([4,20,5,8].sort((a,b) => a-b))
// console.log(["deepak", "ajay", "sonu", "emar"].sort((a,b) => a.localeCompare(b)))


/////////////// function curring  /////////
function multi1(a) {
    return function (b) {
        if (b) return multi1(a * b)
        return a
    }
}
const resultMulti = multi1(5)(6)()
// console.log(resultMulti)


/////////////// shalow copy and deep copy/////////
const cloneObj = {
    name: "deepak",
    age: 26,
    married: true,
    date: new Date(),
    child: { x: 16, y: undefined },
    bikes: ["splender", "mt15"],
    salary: undefined
}

const clonedObj1 = JSON.parse(JSON.stringify(cloneObj))
// console.log(clonedObj1)

function deepClone(cloneObj) {
    const copyObj = {};
    for (const key in cloneObj) {
        copyObj[key] = cloneObj[key]
    }
    return copyObj
}
const clonedObj2 = deepClone(cloneObj);
// console.log(clonedObj2)



//////////// call object's function ///////////
class Person {
    constructor(name, email, age) {
        this.name = name;
        this.age = age;
        this.email = email
        this.print = this.print.bind(this)
    }

    // print = () => {
    //     console.log(this.name, this.email, this.age)
    // },

    print() {
        console.log(this.name, this.email, this.age)
    }
}

const person = new Person("deepak", "dpksini49@gmail.com", 26)

const copyFn = person.print
// // copyFn() //////////// use funtion bind or convert fn into arraw fn

