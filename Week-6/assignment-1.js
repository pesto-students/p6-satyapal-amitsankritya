// Problem 6.1: Max Sum Contiguous Subarray

let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSum = function(arr) {

  let temp = [];
  let tempArr = [];
  let sum = 0;
  let tempSum = 0;

  for (let i = 1; i < arr.length; i++) {
  
    j = 0;
  
    while(j <= arr.length) {
      if(tempArr.length == i) {
        if(tempSum > sum) {
          temp = tempArr;
          sum = tempSum;
        }
  
        if(j < arr.length) {
          j = j - (i - 1);
        }
  
        tempSum = 0;
        tempArr = [];
        
      } else {
        tempSum = tempSum + arr[j];
        tempArr.push(arr[j]);
        j++;
      }
    }
      
  }

  return sum;
}

console.log(maxSum(arr1)); // not able to get the return value if arrow function is used