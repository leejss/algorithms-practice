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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
    let maxDepth = 0;
    const dfsForMaxDepth = (node, depth) => {
        if (!node) return;
        if (!node.left && !node.right) {
            if (maxDepth < depth) {
                maxDepth = depth;
            }
        }
        dfsForMaxDepth(node.left, depth + 1);
        dfsForMaxDepth(node.right, depth + 1);
    };

    dfsForMaxDepth(root, 0);
};
