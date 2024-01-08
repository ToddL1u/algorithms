const findNumWays = (s) => {
  let dp = new Array(s.length);
  return helper(s, s.length, dp);
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
//   if (k > 1 && parseInt(data[s] + data[s + 1]) <= 26) result += helper(data, k - 2);
//   return result;
// }

/**
 * O(n)
 */
//12 => ab || l
function helper(data, k, dp) {
  if (k == 0) return 1;
  let s = data.length - k;
  //if the string starts with 0, should be no combination;
  if (data[s] == 0) return 0;
  if(dp[k]) return dp[k];
  let result = helper(data, k - 1, dp);
  if (k > 1 && parseInt(data[s] + data[s + 1]) <= 26) result += helper(data, k - 2, dp);
  dp[k] = result;
  // console.log(data, k, dp);
  return result;
}

module.exports = findNumWays;

/**
 * eg: 12345
 * round1: 1+rest || 12+ rest
 * round2: 1+2+rest || 1+ <23+ rest> || 12+3+rest || 12+ 34+ rest
 * round3: 1+2+3+rest || 1+ <23+ 3 + rest || 1+23+34+rest > || 1+ 2+ <34+ rest>  || 12+3+4+rest || 12+3+45+rest || 12+<34+5+rest> || 12+<34+5+rest>
 * so we can see from round3, there are lots step has been repeated from round2, so we can use memoization to cache the result
 */