// Given an array of size N containing only 0s, 1s, and 2s; 
// sort the array in ascending order

let arr = [0, 2, 1, 2, 0];
let stack = [...arr];
let temp;

//! TODO: Reduce Time complexity to O(N)
function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
    
        for( let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(sort(arr));