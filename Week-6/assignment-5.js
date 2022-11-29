// Pair With Given Difference
// Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78

let arr = [5, 10, 3, 2, 50, 80];
let diff = 78;

function checkIfPairExists(arr, diff) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(diff == Math.abs(arr[i] - arr[j])) {
                return 1;
            }
        }
    }

    return 0;
}

console.log(checkIfPairExists(arr, diff));