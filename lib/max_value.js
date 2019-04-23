function maxValue(node, visited=new Set()) {
  let max = node.val;
  visited.add(node);

  let queue = [];
  queue = queue.concat(node.neighbors);

  for(let i = 0; i < queue.length; i++) {
    if(visited.has(queue[i])) {
      continue;
    } else {
      visited.add(queue[i]);
    }

    if(queue[i].val > max) {
      max = queue[i].val;
    }

    if(queue[i].neighbors.length > 0) {
      queue = queue.concat(queue[i].neighbors);
    }
  }

  return max;
}

module.exports = {
    maxValue
};