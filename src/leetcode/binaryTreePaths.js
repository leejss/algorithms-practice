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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const answer = [];
    const dfs = (node, paths) => {
        if (!node) return;
        const p = paths.concat(node.val);
        if (!node.left && !node.right) {
            answer.push(p.join("->"));
        }
        dfs(node.left, p);
        dfs(node.right, p);
    };

    dfs(root, []);
    return answer;
};
