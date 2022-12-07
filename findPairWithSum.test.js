const findPairWithSum = require("./findPairWithSum");
describe("finding paired number", () => {
    test("expect [1,2,3,9] be empty", () => {
        expect(findPairWithSum([1,2,3,9], 8)).toEqual([]);
    });
    test("expect [1,2,4,4] be [4,4]", () => {
        expect(findPairWithSum([1,2,4,4], 8)).toEqual([4,4]);
    });
})