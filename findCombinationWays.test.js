const findNumWays = require("./findCombinationWays");
describe("find number and alphabat combinations", () => {
  //from a:1... z:26, finding all the posibble combination ways
  //3 could
  test("expect 3 will be 1", () => {
    expect(findNumWays("3")).toBe(1);
  })
  //12 => ab || l
  test("expect 12 will be 2", () => { 
    expect(findNumWays("12")).toBe(2);
  })
  test("expect 12345 will be 3", () => { 
    expect(findNumWays("12345")).toBe(3);
  })
  test("expect 01 will be 0", () => {
    expect(findNumWays("01")).toBe(0);
  })
  test("expect empty string will be 1", () => {
    expect(findNumWays("")).toBe(1);
  })
})