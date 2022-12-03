// Given an array of size N containing only 0s, 1s, and 2s; 
// sort the array in ascending order

// let arr = [0, 2, 1, 2, 0];
// let arr = [0, 1, 0, 2, 2, 1, 0, 1, 2, 2, 1, 0, 0 ,0, 1, 1, 1, 0, 1, 0, 1, 2, 0, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0]; // i = 0

function sort(arr) {
    let countZero = 0;
    let countOne = 0;
    let countTwo = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            countZero++;
        }

        if(arr[i] === 1) {
            countOne++;
        }

        if(arr[i] === 2) {
            countTwo++;
        }
    }

    arr1 = [];

    for(var i = 0; i < countZero; i++) {
        arr1[i] = 0;
    }

    for(var i = arr1.length; i < (countZero + countOne); i++) {
        arr1[i] = 1;
    }

    for(var i = arr1.length; i < (countZero + countOne + countTwo); i++) {
        arr1[i] = 2;
    }
    return arr1;
}

console.log(sort(arr));


// Time Complexity O(N)
// Space Complexity O(1)

// Note: Not sure if this is the expected solution