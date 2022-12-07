const getWords = require("./getWords");
describe("check words feature", () => {
  test("expect sos is existed.", () => {
    const arr = [
      ["s", "s", "o", "s"],
      ["s", "o", "s", "s"],
      ["s", "s", "s", "o"],
    ];
    // expect(getWords(arr, "sos")).toBe(true);
  });
});
