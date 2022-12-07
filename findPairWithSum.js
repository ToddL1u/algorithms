/**
 * find the pair number is existed that both number plus together equals sum number
 * 
 * [1,2,3,9] => false
 * [1,2,4,4] => true
 */

const findPairWithSum = (arr, target) => {
  //solution1
  // arr = arr.sort();//if can't guarantee the array is in order
  // let lowKey = 0;
  // let highKey = arr.length -1;
  // while(lowKey < highKey) {
  //   let sum = arr[lowKey] + arr[highKey];
  //   if(sum == target) return [arr[lowKey], arr[highKey]];
  //   if(sum > target) {
  //     highKey--;
  //   } else {
  //     lowKey++;
  //   }
  // }
  // return [];
  
  //solution2
  let complement = [];
  for(let i = 0; i< arr.length; i++) {
    let diff = target - arr[i];
    if(complement.indexOf(diff) > -1) {
      return [diff, arr[i]];
    } else {
      complement.push(diff);
    }
  }
  return []
}

module.exports = findPairWithSum;