//in-place update
const mergeSort = (arr) => {
  let n = arr.length;
  if (n < 2) return arr;
  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  // console.log(left, right);
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
  return arr;
};

function merge(left, right, arr) {
  let l = 0; //left index
  r = 0; //right index
  k = 0; //arr index
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      arr[k] = left[l++];
    } else {
      arr[k] = right[r++];
    }
    k++;
  }
  while (l < left.length) {
    arr[k++] = left[l++];
  }
  while (r < right.length) {
    arr[k++] = right[r++];
  }
}

module.exports = mergeSort;
