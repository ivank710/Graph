function numRegions(graph) {
  let count = 0;
  let visited = new Set();
  let queue = [];

  for(let k in graph) {
    if(visited.has(k)) {
      continue;
    } else {
      visited.add(k);
    }

    if(graph[k].length > 0) {
      queue = queue.concat(graph[k]);

      while(queue.length) {
        let node = queue.shift();

        if(!visited.has(node)) {
          visited.add(node);
          if(graph[node].length > 0) {
            queue = queue.concat(graph[node]);
          }
        }
      }
    }

    count += 1;
  }

  return count;
}

module.exports = {
    numRegions
};