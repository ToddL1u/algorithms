const quickSort = (arr, start, end) => {
  if (start < end){
    let pIndex = getPartion(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }
};

function getPartion(arr, start, end) {
  let pivot = arr[end];
  let pIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]]
      pIndex++;
    }
  }
  [arr[end], arr[pIndex]] = [arr[pIndex], arr[end]]
  return pIndex;
}

module.exports = quickSort;
