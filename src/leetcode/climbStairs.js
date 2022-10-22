/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let one = 1;
    let two = 1;

    // how works ?

    for (let i = 0; i < n - 1; i++) {
        let temp = one;
        one = one + two;
        two = temp;
    }
    return one;
};

// 최적의 해
// 부분 문제
