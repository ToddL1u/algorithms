const bubbleSort = require("./bubbleSort");
test("expect [5,3,2,4,1] be [1,2,3,4,5]", () => {
  expect(bubbleSort([5,3,2,4,1])).toEqual([1,2,3,4,5]);
})