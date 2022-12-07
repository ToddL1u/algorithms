//find the target with individual number
const findTargetNumber = (arr, targetNum) => {
  let result = [];
  const findMatch = (index, tempSum, tempArr) => {
    if(tempSum == targetNum) {
      result.push(tempArr.slice());
      return;
    }
    if(tempSum > targetNum) return;
    for(let i=index; i< arr.length; i++) {
      tempArr.push(arr[i]);
      // console.log(tempArr, i);
      findMatch(i,tempSum+arr[i], tempArr);
      tempArr.pop();
    }
  }
  findMatch(0,0,[]);
  return result;
}

module.exports = findTargetNumber;