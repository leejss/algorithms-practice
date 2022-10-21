const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
    for (const node of graph[src]) {
        if (hasPath(graph, node, dst) === true) return true;
    }
    return false;
};

const hasPath2 = (graph, src, dst) => {
    const queue = [src];

    while (queue.length > 0) {
        const shifted = queue.shift();
        if (shifted === dst) return true;
        for (const node of graph[shifted]) {
            queue.push(node);
        }
    }
    return false;
};
