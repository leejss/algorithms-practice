const bfs = (graph, source) => {
    const queue = [source];

    while (queue.length > 0) {
        const shifted = queue.shift();
        for (const node of graph[shifted]) {
            queue.push(node);
        }
    }
};

const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
};
