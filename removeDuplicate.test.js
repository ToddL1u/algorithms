const removeDuplicate = require("./removeDuplicate")

test("expect [0,0,0,1,1,2,2,3,3,4] to be [0,1,2,3,4]", () => {
  let arr = [0,0,0,1,1,2,2,3,3,4];
  expect(removeDuplicate(arr)).toHaveLength(4);
})