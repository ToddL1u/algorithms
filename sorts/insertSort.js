const insertSort = arr => {
  let pre, cur;
  for(let i = 1; i < arr.length; i++) {
    pre = i -1;
    cur = arr[i];
    while(pre > 0 && arr[pre] > cur) {
      arr[pre+1] = arr[pre];
      pre--;
    }
    arr[pre+1] = cur;
  }
  return arr;
}

module.exports = insertSort;