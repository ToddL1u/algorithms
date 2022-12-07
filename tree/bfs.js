const bfs = tree => {
  //solution1
  // iterative
  let res = [];
  let queue = [tree];
  while(queue.length !== 0) {
    let next = queue.shift();
    if(next.value) res.push(next.value);
    if(next.left) queue.push(next.left);
    if(next.right) queue.push(next.right);
  }
  return res;

  //solution2
  //recursive;
  // const recursion = (treeNode, result) => {
  //   if(treeNode.value == null) return;
  //   result.push(treeNode.value)
  //   if(treeNode.left) return recursion(treeNode.left, result);
  //   if(treeNode.right) return recursion(treeNode.right, result);
  //   return result;
  // }
  
  // return recursion(tree, []);
}

module.exports = bfs;