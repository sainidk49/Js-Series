
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

// printFibonacciNum(10); //// return => 0 1 1 2 3 5 8 13 21 34 


////////////// subsets with backtracking ///////////
function subsets(nums) {
    const result = [];

    function backtrack(start, path) {
        if (start === nums.length) {
            result.push([...path]);
            return;
        };

        path.push(nums[start]);
        backtrack(start + 1, path);

        path.pop();
        backtrack(start + 1, path);
    }

    backtrack(0, []);
    return result;
}

// console.log(subsets([1, 2, 3]));  // => [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]



//========= traverse subset of array without duplicate subsets ================
function subsetsWithoutDuplicate(arr, index, subArr, result) {
    if (index === arr.length) {
        result.push([...subArr]);
        return;
    };
    ///////// include ///////
    subArr.push(arr[index]);

    subsetsWithoutDuplicate(arr, index + 1, subArr, result);

    ///////// exclude ////
    subArr.pop();

    let checkIndex = index + 1;
    while (checkIndex < arr.length && arr[checkIndex] === arr[checkIndex - 1]) {
        checkIndex++;
    }

    /////// traverse ////////
    subsetsWithoutDuplicate(arr, checkIndex, subArr, result);


    return result;
}
const array = [1, 2, 3, 3]
const i = 0;
const subArray = [];
const result = []
// console.log(subsetsWithoutDuplicate(array, i, subArray, result));
//// => return [ [ 1, 2, 3, 3 ], [ 1, 2, 3 ], [ 1, 2 ], [ 1, 3, 3 ], [ 1, 3 ], [ 1 ], [ 2, 3, 3 ], [ 2, 3 ], [ 2 ], [ 3, 3 ], [ 3 ], [] ]



//========= permutations of array ================

function swapValue(arr, start, index) {
    let temp = arr[start];
    arr[start] = arr[index];
    arr[index] = temp;
}

function permutations(arr, start, result) {
    if (start === arr.length) {
        result.push([...arr]);
        return;
    }

    for (let index = start; index < arr.length; index++) {

        ///// swap the value /////////
        swapValue(arr, start, index);

        permutations(arr, start + 1, result)

        ///// back tracking swap the value /////////
        swapValue(arr, start, index);

    }

    return result;
}
// console.log(permutations([1, 2, 3], 0, []));
///// return => 
// [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 2, 1],
//     [3, 1, 2]
// ] 


///////////// N queens //////////////

function solveNQueens(n) {
    const board = new Array(n).fill(null).map(() => new Array(n).fill('_ '));
    const results = [];
    
    function isSafe(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q ') {
                return false;
            }
        }
        
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q ') {
                return false;
            }
        }
        
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q ') {
                return false;
            }
        }

        return true;
    }

    function solve(row) {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 'Q ';
                solve(row + 1);
                board[row][col] = '_ ';
                
            }
        }
    }

    solve(0);
    return results;
}

const solutions = solveNQueens(4);
console.log(`Found ${solutions.length} solutions for ${n}-Queens problem:`);
console.log(solutions);