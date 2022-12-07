//remove duplicate number and update IN-PPLACE for the unique number array
//result: [0,1,2,3,4]
const removeDuplicate = arr => {
  let slowPointer = 0;
  for(let fastPointer = 0; fastPointer< arr.length; fastPointer++) {
    if(arr[slowPointer]!== arr[fastPointer]) {
      slowPointer++;
      arr[slowPointer] = arr[fastPointer];
    }
  }
  arr.length = slowPointer;
  return arr;
}
module.exports = removeDuplicate;