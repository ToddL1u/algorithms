const bfs = tree => {
  //solution1
  // iterative
  // let res = [];
  // let queue = [tree];
  // while(queue.length !== 0) {
  //   let next = queue.shift();
  //   if(next.value) res.push(next.value);
  //   if(next.left) queue.push(next.left);
  //   if(next.right) queue.push(next.right);
  // }
  // return res;

  //solution2
  //recursive;
  const recursion = (queue, result) => {
    if(queue.length == 0) return result;
    let treeNode = queue.shift(); 
    result.push(treeNode.value)
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
    return recursion(queue, result);
  }
  
  return recursion([tree], []);
}

module.exports = bfs;