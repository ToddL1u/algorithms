const LinkedList = require('./LinkedList');

const findMiddleNode = require('./FindMiddleNode')
const reverseListNode = require('./reverseListNode')
const removeEvenNode = require('./removeEvenNode')

describe("check linked list", () => {
  test("find middle node 3", () => {
    const nodeList = new LinkedList(5);
    nodeList.append(10);
    nodeList.append(3);
    nodeList.append(7);
    // 5->10->3->7-> NULL
    expect(findMiddleNode(nodeList)).toBe(3);
  })

  test("reverseListNode to be [7,3,10,5]", () => {
    const nodeList = new LinkedList(5);
    nodeList.append(10);
    nodeList.append(3);
    nodeList.append(7);
    let newList = reverseListNode(nodeList.head);
    let res = [];
    let temp = newList;
    while(temp!== null) {
      res.push(temp.value);
      temp = temp.next;
    }
    expect(res).toEqual([7,3,10,5]);
  })

  test("reverseListNode with linked list reverse to be [7,3,10,5]", () => {
    const nodeList = new LinkedList(5);
    nodeList.append(10);
    nodeList.append(3);
    nodeList.append(7);
    expect(nodeList.reverse().print()).toEqual([7,3,10,5]);
  })

  test("remove even node from [2, 10, 1,2,3,4,5] to be [1,3,5]", () => {
    const nodeList = new LinkedList(1);
    nodeList.append(2);
    nodeList.append(3);
    nodeList.append(4);
    nodeList.append(5);
    let newList = removeEvenNode(nodeList.head);
    let res = [];
    let temp = newList;
    while(temp !== null) {
      res.push(temp.value);
      temp = temp.next;
    }
    expect(res).toEqual([1,3,5]);
  })
})