const scoreWords = require("./scrabble");
describe("scrabble word checking", () => {
  test("expect _cotpqi to get 4 points with cat letter", () => {
    expect(scoreWords("cat","_cotpqi")).toBe(4);
  })
  test("expect _cotpqa to get points to get cat letter", () => {
    expect(scoreWords("cat","_cotpqa")).toBe(5);
  })
})