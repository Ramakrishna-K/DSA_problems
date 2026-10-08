function countComponents(n, edges) {
    let graph = Array.from({ length: n }, () => []);

    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    let visited = new Set();
    let count = 0;

    function dfs(node) {
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    for (let node = 0; node < n; node++) {
        if (!visited.has(node)) {
            count++;
            dfs(node);
        }
    }

    return count;
}