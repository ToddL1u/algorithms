class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let temp = this.root;
      while (true) {
        if (val < temp.value) {
          if(!temp.left) {
            temp.left = newNode;
            return this;
          } 
          temp = temp.left;
        } else if (val > temp.value) {
          if(!temp.right) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
  }

  lookup() {}
}

module.exports = BinarySearchTree;
