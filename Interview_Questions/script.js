
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
// intersect()

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
// shortArray()
