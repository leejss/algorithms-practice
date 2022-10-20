function solution(array, commands) {
    const answer = [];
    for (const command of commands) {
        const i = command[0];
        const j = command[1];
        const k = command[2];
        const sliced = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(sliced[k - 1]);
    }
    return answer;
}

solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
    ],
);
// [1, 5, 2, 6, 3, 7, 4]
// [([2, 5, 3], [4, 4, 1], [1, 7, 3])];
