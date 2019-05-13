// function numRegions(graph) {
//   let count = 0;
//   let visited = new Set();
//   let queue = [];

//   for(let k in graph) {
//     if(visited.has(k)) {
//       continue;
//     } else {
//       visited.add(k);
//     }

//     if(graph[k].length > 0) {
//       queue = queue.concat(graph[k]);

//       while(queue.length) {
//         let node = queue.shift();

//         if(!visited.has(node)) {
//           visited.add(node);
//           if(graph[node].length > 0) {
//             queue = queue.concat(graph[node]);
//           }
//         }
//       }
//     }

//     count += 1;
//   }

//   return count;
// }

function numRegions(graph) {
  let visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (depthFirst(node, graph, visited)) count += 1;
  }

  return count;
}

function depthFirst(node, graph, visited) {
  if (visited.has(node)) return false;
  visited.add(node);
  graph[node].forEach(neighbor => depthFirst(neighbor, graph, visited)); 
  return true;
}

module.exports = {
    numRegions
};