const threeSum = require("./threesum")
test("expect [-1,0,1,2,-1,-4] to be [[-1,-1,2],[-1,0,1]]", () => {
  expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]]);
})