//get the product of array that each product not includes itself
//[1,2,3,4] => [24,12,8,6]
const getPorductArray = (arr) => {
  //solution1
  //O(nˆ2)
  // let product_result = new Array(arr.length).fill(1);
  // for(let i=0;i<arr.length; i++) {
  //   for(let j=0;j<arr.length;j++) {
  //     if(i!== j) product_result[i]*= arr[j];
  //   }
  // }
  // return product_result;

  //solution2
  //separate list into two array to prodcut left and right except the target item
  //O(n)
  let product_result = [];
  let left = new Array(arr.length).fill(1);
  let right = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    left[i] = left[i - 1] * arr[i - 1];
    right[i] = right[i - 1] * arr[arr.length - i];
  }
  for (let i = 0; i < arr.length; i++) {
    product_result.push(left[i] * right[arr.length - 1 - i]);
  }
  return product_result;
};

module.exports = getPorductArray;
