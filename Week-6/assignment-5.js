// Pair With Given Difference
// Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78

let arr = [5, 10, 3, 2, 50, 80];
let diff = 78;

function checkIfPairExists(arr, diff) {

    // sorting array to use two pointer approach
    arr.sort(function(a, b){return a - b});

    let i = 0;
    let j = 1;

    while (i < arr.length && j < arr.length) {

        if (i != j && arr[j] - arr[i] == diff) {
            return 1;
        } else if (arr[j] - arr[i] < diff) {
            j++;
        } else {
            i++;
        }
    }
 
    return 0;
}

console.log(checkIfPairExists(arr, diff));

// Time Complexity: O(n) [excluding sort function]
// Space complexity: O(1)