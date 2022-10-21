/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // Recursive solutuion
    // let answer = 0;
    // const dfs = (step, currentSum) => {
    //     const sum = step + currentSum;
    //     if (sum === n) {
    //         answer++;
    //         return;
    //     }
    //     if (sum > n) return;
    //     dfs(1, sum);
    //     dfs(2, sum);
    // };
    // dfs(1, 0);
    // dfs(2, 0);
    // return answer;
    // Bottom up DP
    // base case
    // sub problem
    // only one branch 가 정답을 다 가지고 있는 경우

    let one = 1;
    let two = 1;

    for (let i = 0; i < n - 1; i++) {
        let temp = one;
        one = one + two;
        two = temp;
    }
    return one;
};
