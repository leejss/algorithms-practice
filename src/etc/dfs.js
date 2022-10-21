const dfsUsingStack = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        const popped = stack.pop();
        // console.log(popped);
        for (const neighbor of graph[popped]) {
            // push to stack
            stack.push(neighbor);
        }
    }
};

const dfsUsingRecursion = (graph, source) => {
    console.log(source);
    for (const nei of graph[source]) {
        dfsUsingRecursion(graph, nei);
    }
};

dfsUsingStack(graph, "a");
dfsUsingRecursion(graph, "a");

// base 케이스란 recursive 호출이 일어나지 않는 조건.
// 베이스 케이스를 직접 만들 수 있지만 implicit 베이스 케이스를 이용할 수 있다.
