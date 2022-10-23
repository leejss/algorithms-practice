/**
 * @param {number[]} cost
 * @return {number}
 */

// recursive relations
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    return Math.min(minCost(cost, n - 1), minCost(cost, n - 2));
};

// return output or update outer values
// recursive call
const minCost = (cost, index) => {};
