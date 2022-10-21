/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;

    let memo = [0, 1, 1];

    for (let i = 3; i < n + 1; i++) {
        memo = [memo[1], memo[2], memo[1] + memo[2] + memo[0]];
    }

    return memo[2];
};
