class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;  //this.tail ==> head
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  traverseIndex(index) {
    let counter = 0;
    let node = this.head;
    while(counter!== index) {
      node = node.next;
      counter++;
    }
    return node;
  }
  
  removeIndex(index) {
    let leader = traverseIndex(index -1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  reverse() {
    let first = this.head;
    let second = first.next;
    while(second !== null) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  print() {
    let res = [];
    let temp = this.head;
    while(temp !== null) {
      res.push(temp.value);
      temp = temp.next;
    }
    return res;
  }
}

module.exports = LinkedList;