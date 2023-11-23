const BinarySearchTree = require("./binarySearchTree");
const bst = new BinarySearchTree();
bst.insert(14);
bst.insert(8);
bst.insert(17);
bst.insert(6);
bst.insert(11);
bst.insert(10);
bst.insert(15);
bst.insert(19);
// console.log(JSON.stringify(bst));
/**
 *       14
 *     8    17
 *  6   11 15  19
 *     10
 */   
const bfs = require("./bfs");
const dfs = require("./dfs");
describe("search trees", () => {
  test("bfs", () => {
    expect(bfs(bst.root)).toEqual([14, 8, 17, 6, 11, 15, 19, 10]);
  });
  test("dfs: pre order", () => {
    expect(dfs(bst.root)).toEqual([14, 8, 6, 11, 10, 17, 15, 19]);
  });
  test("dfs: in order", () => {
    expect(dfs(bst.root, 1)).toEqual([6, 8, 10, 11, 14, 15, 17, 19]);
  });
  test("dfs: post order", () => {
    expect(dfs(bst.root, 2)).toEqual([6, 10, 11, 8, 15, 19, 17, 14]);
  });
});
