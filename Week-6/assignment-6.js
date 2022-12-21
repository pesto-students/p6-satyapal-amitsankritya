// Closest sum of 3 numbers in an array

/* Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, target. 
Return the sum of the three integers. Assume that there will only be one solution.
Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2) */

arr = [-1,2,1,-4];
target = 1

function getClosestSum (arr, target){

    // sorting array to use two pointer approach
    arr.sort(function(a, b){return a - b});
 
    let closestSum = 0;
 
    for (let i = 0; i < arr.length - 2; i++)
    {
        let j = i + 1;
        let k = arr.length - 1;
 
        while (j < k) {
 
            let sum = arr[i] + arr[j] + arr[k];
 
            if (target - sum < target - closestSum) {
                closestSum = sum;
            }
 
            if (sum > target) {
                k--;
            } else {
                j++;
            }
        }
    }

    return closestSum;
}

console.log(getClosestSum(arr, target));

// Time Complexity: O(n^2, after sorting) // will try to reduce time complexity, but since need to traverse 3 value at once seems littile bit difficult
// Space Complexity: O(1)