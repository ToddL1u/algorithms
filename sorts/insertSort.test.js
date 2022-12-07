const insertSort = require("./insertSort");
test("expect [1, 2, 7, 6, 4, 9, 12] be [1, 2, 4 ,6, 7, 9, 12]", () => {
  expect(insertSort([1, 2, 7, 6, 4, 9, 12])).toEqual([1, 2, 4, 6, 7, 9, 12]);
});
