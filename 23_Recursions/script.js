
//////////////////////// short array by recursion ///////////////
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const myArray = [3, 6, 4, 8, 10, 1, 2, 1];
// console.log(quickSort(myArray)); ///// return => [ 1, 1, 2, 3, 4, 6, 8, 10 ]


//////////////// print 1 to n number /////////
function printNumbers(n) {
    count++;
    if (n < 1) {
        return;
    }
    printNumbers(n - 1)
    process.stdout.write(n + " ")
}
// printNumbers(5) //// => 1 2 3 4 5 


////////////// print fabonacci number using recursion ///////////
function fibonacci_recursive(n, cache = new Map()) {
    if (n <= 1) {
        return n;
    }
    if (cache.has(n)) {
        let cacheValue = cache.get(n)
        return cacheValue
    }
    let newValue = fibonacci_recursive(n - 1, cache) + fibonacci_recursive(n - 2, cache);
    cache.set(n, newValue)
    return newValue;
}

function printFibonacciNum(number) {
    console.log(`Fibonacci sequence up to ${number}th term:`);
    for (let i = 0; i < number; i++) {
        process.stdout.write(fibonacci_recursive(i) + " ");
    }
}

printFibonacciNum(10); //// return => 0 1 1 2 3 5 8 13 21 34 

