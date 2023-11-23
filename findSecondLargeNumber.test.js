const findSecondLargeNumber = require("./findSecondLargeNumber");
test("expect to find 50 in [11,30,20,50, 33, 66]", () => {
  expect(findSecondLargeNumber([11, 77, 30, 20, 50, 33, 66])).toBe(66);
});
