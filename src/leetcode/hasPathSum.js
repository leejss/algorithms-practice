/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    return dfs(root, 0, targetSum);
};

const dfs = (node, currentSum, targetSum) => {
    if (!node) return false;
    currentSum += node.val;
    if (isLeaf(node)) {
        return currentSum === targetSum;
    }

    // recursive call
    dfs(node.left, currentSum, targetSum);
    dfs(node.right, currentSum, targetSum);
    return dfs(node.left, currentSum, targetSum) || dfs(node.right, currentSum, targetSum);
};

const isLeaf = (node) => {
    return node.left === null && node.right === null;
};
