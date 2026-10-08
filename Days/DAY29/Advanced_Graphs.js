function topologicalSort(graph) {
  let indegree = {};
  let queue = [];
  let result = [];

  // Set indegree of every node to 0
  for (let node in graph) {
    indegree[node] = 0;
  }

  // Calculate indegree
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      indegree[neighbor]++;
    }
  }

  // Add nodes with indegree 0
  for (let node in indegree) {
    if (indegree[node] === 0) {
      queue.push(node);
    }
  }

  // Process queue
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node);

    for (let neighbor of graph[node]) {
      indegree[neighbor]--;

      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D"],
  D: []
};

console.log(topologicalSort(graph));