const undirectedPath = (edges, src, dst) => {
    const graph = buildGraph(edges);
    return hasPath(graph, src, dst, new Set());
};

const buildGraph = (edges) => {
    const graph = {};
    for (const edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(a);
        graph[b].push(b);
    }
    return graph;
};

const hasPath = (graph, src, dst, set) => {
    if (set.has(src)) return false;
    if (src === dst) return true;

    src.add(src);

    for (const node of graph[src]) {
        if (hasPath(graph, node, dst, src) === true) return true;
    }
    return false;
};

const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
];

undirectedPath(edges);
