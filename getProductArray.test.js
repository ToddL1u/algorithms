const getPorductArray = require("./getProductArray");
test("expect [1,2,3,4] be [24,12,8,6]", () => {
  expect(getPorductArray([1,2,3,4])).toEqual([24,12,8,6]);
})