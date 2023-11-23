const findNumWays = (s) => {
  let arr = new Array(s.length);
  return helper(s, s.length, arr);
};

/**
 *
 * O(nˆ2)
 * @returns
 */
// function helper(data, k) {
//   if (k == 0) return 1;
//   let s = data.length - k;
//   //if the string starts with 0, should be no combination;
//   if (data[s] == 0) return 0;
//   let result = helper(data, k - 1);
//   if (k > 1 && parseInt(data[s] + data[s + 1]) <= 26)
//     result += helper(data, k - 2);
//   return result;
// }

/**
 * O(n)
 */
function helper(data, k, arr) {
  if (k == 0) return 1;
  let s = data.length - k;
  //if the string starts with 0, should be no combination;
  if (data[s] == 0) return 0;
  if(arr[k]) return arr[k];
  let result = helper(data, k - 1, arr);
  if (k > 1 && parseInt(data[s] + data[s + 1]) <= 26)
    result += helper(data, k - 2, arr);
  arr[k] = result;
  // console.log(k, arr);
  return result;
}

module.exports = findNumWays;
