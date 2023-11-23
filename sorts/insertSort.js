const insertSort = (arr) => {
  // let pre, cur;
  // for (let i = 1; i < arr.length; i++) {
  //   pre = i - 1;
  //   cur = arr[i];
  //   while (pre > -1 && arr[pre] > cur) {
  //     arr[pre + 1] = arr[pre];
  //     pre--;
  //   }
  //   arr[pre + 1] = cur;
  // }
  // return arr;
  for (let i = 1; i < arr.length; i++) {
    let currentIndex = i;
    while (currentIndex > 0 && arr[currentIndex - 1] > arr[currentIndex]) {
      let temp = arr[currentIndex];
      arr[currentIndex] = arr[currentIndex - 1];
      arr[currentIndex - 1] = temp;
      currentIndex--;
    }
  }
  return arr;
};

module.exports = insertSort;
