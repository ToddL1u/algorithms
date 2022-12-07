// const ListNode = require('./ListNode')
/**
 * 
 * @param {ListNode} head 
 * @returns 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 */
const reverseListNode = head => {
  //solution1
  // let prev = null, next = null, current = head;
  // while(current !== null) {
  //   next = current.next;
  //   current.next = prev;
  //   prev = current;
  //   current = next;
  // }
  // return prev;
  //solution2 recursive
  if(head == null || head.next == null){
    return head;
  } else {
    let newhead = reverseListNode(head.next);
    head.next.next = head;
    head.next = null;
    return newhead;
  }
}

module.exports = reverseListNode;
