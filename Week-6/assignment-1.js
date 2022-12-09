// Problem 6.1: Max Sum Contiguous Subarray

let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSum = function(arr) {

  // let temp = [];
  // let tempArr = [];
  let sum = 0;
  let tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
  
    tempSum += arr[i];

    if(tempSum < 0) {
      tempSum = 0;
    }

    if(sum < tempSum) {
      sum = tempSum;
    }
      
  }

  return sum;
}

console.log(maxSum(arr1)); // not able to get the return value if arrow function is used

// Time Complexity: O(n)
// Space Complexity O(1)