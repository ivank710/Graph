function breadthFirstSearch(startingNode, targetVal) {
  if(startingNode.val === targetVal) return startingNode;

  let visited = new Set();
  visited.add(startingNode);

  let queue = [];
  queue = queue.concat(startingNode.neighbors);

  for(let i = 0; i < queue.length; i++) {
    if(visited.has(queue[i])) {
      continue;
    } else {
      visited.add(queue[i]);
    }
    
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