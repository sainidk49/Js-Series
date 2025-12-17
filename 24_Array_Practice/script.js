function getMajorityEle(arr) {
    // =========== bruitforce ============
    // for (let i = 0; i < arr.length; i++) {
    //     let freq = 0
    //     for (let j = 0; j < arr.length; j++) {
    //         if (arr[i] === arr[j]) {
    //             freq++;
    //         }
    //         if (freq > parseInt(arr.length / 2)) {
    //             return arr[i]
    //         }
    //     }
    // }

    // =========== optimised ============
    let freq = 0, ans = 0
    for (let i = 0; i < arr.length; i++) {
        if (freq === 0) {
            ans = arr[i]
        }
        if (ans === arr[i]) freq++
        else freq--
    }
    return ans
}
// console.log(getMajorityEle([3, 2, 3, 2, 3, 1, 3,]))
console.log(getMajorityEle([1, 2, 3, 3, 2, 3,]))


function getDicies(arr, target) {
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }

    let i = 0, j = arr.length - 1, dices = []
    while (i <= j) {
        if (arr[i] + arr[j] < target) {
            i++
        }
        else if (arr[i] + arr[j] < target) {
            j--
        }
        else if (arr[i] + arr[j] === target) {
            return [i, j]
        }

    }
    return -1

}
// console.log(getDicies([3, 5, 2, 7, 6], 5))
// console.log(getDicies([2, 3, 4, 5, 6, 7], 9)) //if sorted arr 



/////////// get max profit ///////////////
function getMaxProfit(arr) {
    let maxProfit = 0;
    let bestBuy = Infinity

    for (let i = 0; i < arr.length; i++) {
        bestBuy = Math.min(bestBuy, arr[i])
        maxProfit = Math.max(maxProfit, arr[i] - bestBuy)

    }
    return maxProfit
}
// console.log(getMaxProfit([2, 3, 2, 2, 4, 6, 5]))


/////////// Product array  ///////////////
function getProductArr(arr) {
    let arrLength = arr.length
    // let result = [];

    // let prefixCount = 1;
    // let prefix = []
    // for (let i = 0; i < arrLength; i++) {
    //     prefix[i] = prefixCount
    //     prefixCount *= arr[i]
    // }

    // let suffixCount = 1;
    // let suffix = [];
    // for (let j = arrLength - 1; j >= 0; j--) {
    //     suffix[j] = suffixCount
    //     suffixCount *= arr[j]
    // }

    // for (let k = 0; k < arrLength; k++) {   
    //     result[k] = suffix[k]*prefix[k]
    // }
    // return result


    let result = [];
    let prefixCount = 1;
    for (let i = 0; i < arrLength; i++) {
        result[i] = prefixCount
        prefixCount *= arr[i]
    }

    let suffixCount = 1;
    for (let j = arrLength - 1; j >= 0; j--) {
        result[j] *= suffixCount
        suffixCount *= arr[j]
    }

    return result
}
// console.log(getProductArr([1, 2, 3, 4]))


/////////// get target value by binary search //////////
function getTarget(arr, target) {
    let start = 0;
    let end = arr.length - 1
    let mid = parseInt((start + (end - start) / 2))

    while (start <= end) {
        if (arr[mid] < target) {
            start = mid + 1
            mid = parseInt((start + (end - start) / 2))
        }
        else if (arr[mid] > target) {
            end = mid - 1
            mid = parseInt((start + (end - start) / 2))
        }
        else if (arr[mid] === target) {
            return mid
        }
    }
    return -1
}
// console.log(getTarget([-1, 0, 2, 7, 10, 11, 15, 17], 11))




/////////// get target value by binary search with recursion //////////
function getTargetRecursion(arr, target, start, end) {

    let mid = parseInt((start + (end - start) / 2))

    if (start <= end) {
        if (arr[mid] < target) {
            getTargetRecursion(arr, target, mid + 1, end)
        }
        else if (arr[mid] > target) {
            getTargetRecursion(arr, target, start, mid - 1)
        }
        else if (arr[mid] === target) {
            return mid
        }
    }
    return -1
}
// console.log(getTarget([-1, 0, 2, 7, 10, 11, 15, 17], 17))



/////////// get target value by binary search //////////
function getTargetRotation(arr, tr) {
    let st = 0;
    let end = arr.length - 1

    while (st <= end) {
        let mid = parseInt((st + (end - st) / 2))


        if (arr[mid] === tr) {
            return mid
        }

        if (arr[st] <= arr[mid]) {
            if (arr[st] <= tr && tr <= arr[mid]) {
                end = mid - 1
            }
            else {
                st = mid + 1
            }
        }
        else {
            if (arr[mid] <= tr && tr <= arr[end]) {
                st = mid + 1
            }
            else {
                end = mid - 1
            }
        }
    }
    return -1
}
// console.log(getTargetRotation([3, 4, 5, 6, 7, 0, 1, 2], 2))




/////////////// Get closet value ///////////
function getClosetSum(arr, target) {
    let s = 0;
    let e = arr.length - 1;
    let closetValue = -1;
    let dicesArr = []

    while (s <= e) {
        let sum = arr[s] + arr[e];
        if (closetValue < sum && sum < target) {
            closetValue = sum
            dicesArr = [arr[s], arr[e]]
            s++
        }
        else {
            e--
        }
    }
    return dicesArr
}

// console.log(getClosetSum([1, 3, 4, 7, 10], 15))
// console.log(getClosetSum([10, 22, 28, 29, 30, 40], 54))