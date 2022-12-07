const LinkedList = require('./LinkedList');
const nodeList = new LinkedList(5);
nodeList.append(10);
nodeList.append(3);
nodeList.append(7);
const findMiddleNode = require('./FindMiddleNode')
const reverseListNode = require('./reverseListNode')
describe("check linked node", () => {
  test("find middle node 3", () => {
    expect(findMiddleNode(nodeList)).toBe(3);
  })

  test("reverseListNode to be [7,3,10,5]", () => {
    let newList = reverseListNode(nodeList.head);
    let res = [];
    let temp = newList;
    while(temp!== null) {
      res.push(temp.value);
      temp = temp.next;
    }
    expect(res).toEqual([7,3,10,5]);
  })

  // test("remove value 3 to be [7,10,5]", () => {
  //   nodeList.remove(3);
  //   expect(nodeList).toEqual([7,10,5]);
  // })
})