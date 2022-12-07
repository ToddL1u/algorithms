const findTargetNumber = require("./findMatchNumberEqualTargetNumber");
test("expect [2,3,6,7] with target 7 to be [[2,2,3],[7]", () => {
  expect(findTargetNumber([2,3,6,7],7)).toEqual([[2,2,3],[7]]);
})