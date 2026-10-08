const graph = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0],
  3: [1],
  4: [1]
};

function dfs(graph, node, visited) {
  visited.add(node);

  console.log(node);

  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

const visited = new Set();

dfs(graph, 0, visited);