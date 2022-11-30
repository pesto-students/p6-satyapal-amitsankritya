// Problem 6.1: Max Sum Contiguous Subarray

let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSum = function(arr) {

  // let temp = [];
  // let tempArr = [];
  let sum = 0;
  let tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
  
    tempSum += arr[i];
    // tempArr.push(arr[i]);

    if(tempSum < 0) {
      console.log("tempsum is lower than 0");
      tempSum = 0;
    }

    if(sum < tempSum) {
      //temp[i] = tempArr;
      console.log(" Temp Sum is greater");
      sum = tempSum;
    } else {
      //tempArr.pop();
    }
      
  }

  // console.log(temp);

  return sum;
}

console.log(maxSum(arr1)); // not able to get the return value if arrow function is used

// Time Complexity of above solution is O(n)
// Space Complexity O(1)