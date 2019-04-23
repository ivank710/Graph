function breadthFirstSearch(startingNode, targetVal) {
  if(startingNode.val === targetVal) return startingNode;

  let queue = [];
  queue = queue.concat(startingNode.neighbors);

  for(let i = 0; i < queue.length; i++) {
    if(queue[i].val === targetVal) {
      return queue[i];
    }

    if(queue[i].neighbors.length > 0) {
      queue = queue.concat(queue[i].neighbors);
    }
  }

  return null;
}

module.exports = {
    breadthFirstSearch
};