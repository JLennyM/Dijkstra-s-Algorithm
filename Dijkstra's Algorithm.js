function dijkstra(graph, start) {
    // Initialize distances with infinity
    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    // Priority queue of vertices to be processed
    const priorityQueue = [start];
    const visited = new Set();

    while (priorityQueue.length > 0) {
        // Sort priority queue to get the vertex with the smallest distance
        priorityQueue.sort((a, b) => distances[a] - distances[b]);
        const currentVertex = priorityQueue.shift();

        if (visited.has(currentVertex)) continue;
        visited.add(currentVertex);

        // Process each neighboring vertex
        for (let neighbor in graph[currentVertex]) {
            const distance = graph[currentVertex][neighbor];
            const totalDistance = distances[currentVertex] + distance;

            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
                priorityQueue.push(neighbor);
            }
        }
    }

    return distances;
}

// Example usage
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

console.log(dijkstra(graph, 'A'));
// Output should be: { 'A': 0, 'B': 4, 'C': 2, 'D': 5 }
