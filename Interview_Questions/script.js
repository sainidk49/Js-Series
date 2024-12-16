
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
// memoizeFun(2, 5, (message, value) => {
//     console.log("a", message, value)
// })

// memoizeFun(2, 9, (message, value) => {
//     console.log("c", message, value)
// })


// ============== chane method ===================

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

console.log(makeSubArr(numberArr, 4))