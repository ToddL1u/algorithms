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
  // let first = head, second = first.next, temp;
  // while(second!== null) {
  //   temp = second.next;
  //   second.next = first;
  //   first = second;
  //   second = temp;
  // }
  // head.next = null;
  // head = first;
  // return head;

  //solution2 recursive
  if(head == null || head.next == null){
    return head;
  } else {
    let newhead = reverseListNode(head.next);
    head.next.next = head;
    head.next = null;
    return newhead;
  }

  // if(head == null) return null;
  // let newhead = head;
  // if(head.next) {
  //   newhead = reverseListNode(head.next);
  //   head.next.next = head;
  // }
  // head.next = null;
  // return newhead;
  
  
}

module.exports = reverseListNode;
