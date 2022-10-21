/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const fibmemo = (n, memo = {}) => {
        if (n in memo) return memo[n];
        if (n === 0) return 0;
        if (n < 3) return 1;
        return fibmemo(n - 1, memo) + fibmemo(n - 2, memo);
    };

    return fibmemo(n);
};

const fib2 = (n) => {
    //  fixed size 2
    let memo = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        memo = [memo[1], memo[0] + memo[1]];
    }

    return memo[1];
};

// def fib(N):
// 	if N == 0: return 0
// 	memo = [0,1]
// 	for _ in range(2,N+1):
// 		memo = [memo[-1], memo[-1] + memo[-2]]

// 	return memo[-1]
