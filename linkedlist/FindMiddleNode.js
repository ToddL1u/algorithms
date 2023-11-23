
const findMiddleNode = list => {
  //solution1
  //this runs two times, first time for get size and second time loop the list

  // let middle = Math.floor(list.length/2);
  // let cur = list.head;
  // while(middle !== 0) {
  //   cur = cur.next;
  //   middle--;
  // }
  // return cur.value;

  //solution2
  //use two pointer and run once the loop
  let slowPointer = list.head, fastPointer = list.head; //including null if the amount is even
  while(fastPointer && fastPointer.next ) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  return slowPointer.value;
}

module.exports = findMiddleNode;