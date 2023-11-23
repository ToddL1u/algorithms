const insertSort = require("./insertSort");
const bubbleSort = require("./bubbleSort");
const mergeSort = require("./mergeSort");
const quickSort = require("./quickSort");
describe("sorting algorithms", () => {
  const result = [1, 2, 3, 4, 5, 6, 7, 8];
  test("insertSort", () => {
    expect(insertSort([2, 4, 1, 6, 8, 5, 3, 7])).toEqual(result);
  });

  test("bubbleSort", () => {
    expect(bubbleSort([2, 4, 1, 6, 8, 5, 3, 7])).toEqual(result);
  });

  test("mergeSort", () => {
    expect(mergeSort([2, 4, 1, 6, 8, 5, 3, 7])).toEqual(result);
  });

  test("quickSort", () => {
    let arr = [2, 4, 1, 6, 8, 5, 3, 7];
    quickSort(arr, 0 , arr.length -1);
    expect(arr).toEqual(result);
  });
});
