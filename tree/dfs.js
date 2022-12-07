// type: 0 pre order
// type: 1 in order
// type: 2 post order
const dfs = (root, type = 0) => {
  let result = [];
  if(!root) return result;
  if(type == 0) {
    let stack = [root];
    while(stack.length > 0) {
      let node = stack.pop();
      if(node.value) result.push(node.value);
      if(node.right) stack.push(node.right);
      if(node.left) stack.push(node.left);
    }
    // const preorder = treeNode => {
    //   result.push(treeNode.value);
    //   treeNode.left && preorder(treeNode.left);
    //   treeNode.right && preorder(treeNode.right);
    // }
    // preorder(root);
  } else if (type == 1) {
    // const inorder = treeNode => {
    //   treeNode.left && inorder(treeNode.left);
    //   result.push(treeNode.value);
    //   treeNode.right && inorder(treeNode.right);
    // }
    // inorder(root);
    
    let stack = [];
    let current = root;
    while(current !== null || stack.length > 0) {
      while(current !== null) { //left
        stack.push(current);
        current = current.left
      }
      let node = stack.pop();
      result.push(node.value);
      current = node.right;
    }
  } else if (type == 2) {
    const postorder = treeNode => {
      treeNode.left && postorder(treeNode.left);
      treeNode.right && postorder(treeNode.right);
      result.push(treeNode.value);
    }
    postorder(root);
  }
  return result;
}

module.exports = dfs;