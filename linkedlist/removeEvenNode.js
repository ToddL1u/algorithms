const removeEvenNode = node => {
  //find the odd node
  while(node && node.value % 2 === 0) node = node.next
  let current = node;
  while(current && current.next) {
    if(current.next.value % 2 === 0) {
      current.next = current.next.next;
    } else {
      current = current.next
    }
  }

  return node;
}

module.exports = removeEvenNode