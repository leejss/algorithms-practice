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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const answer = [];
    const dfs = (node, currentSum, paths) => {
        if (!node) return;
        currentSum += node.val;
        const p = paths.concat(node.val);
        if (!node.left && !node.right) {
            if (currentSum === targetSum) {
                answer.push(p);
            }
        }
        dfs(node.left, currentSum, p);
        dfs(node.right, currentSum, p);
    };

    dfs(root, 0, []);

    return answer;
};
