//result: 23
const array = [3, 7, 5, 13, 20, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29];
const findMode = (arr) => {
  //solution1
  // O(n)
  /*
  let mode;
  let nums = {};
  for(let i=0;i<arr.length;i++) {
    if(nums[arr[i]]){
      nums[arr[i]]++;
    } else {
      nums[arr[i]] = 1;
    }
  }
  let num =0;
  for(key in nums) {
    if(nums[key] > num) {
      num = nums[key];
      mode = key;
    }
  }
  return mode;
  */

  //vote algorithm
  let count = 1;
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (count == 0) result = arr[i];
    if (arr[i] == result) {
      count++;
    } else {
      count--;
    }
  }
  return result;
};

module.exports = findMode;
