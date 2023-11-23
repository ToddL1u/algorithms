/**
 *
 * @param {array} nums
 * sorting array frist, and then choose item one by one
 * then iterate the rest of the items find the sum of
 * 0 - target item
 */
const threeSum = function (nums) {
  /*
  let result = [];
  nums = nums.sort();
  let l = 0,
    r = 0,
    sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i == 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      l = i + 1;
      r = nums.length - 1;
      sum = 0 - nums[i];
      while (l < r) {
        if (nums[l] + nums[r] === sum) {
          result.push([nums[i], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (nums[l] + nums[r] > sum) {
          r--;
        } else {
          l++;
        }
      }
    }
  }
  return result;*/
  nums = nums.sort();
  let l, r, sum;
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = nums.length - 1;
    while(l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if(sum > 0) {
        r--
      } else if(sum < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        while(l < r && nums[i] == nums[i-1]) l++;
        l++;
      }
    }
  }
  return result;
};

module.exports = threeSum;
