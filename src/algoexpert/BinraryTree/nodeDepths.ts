export function nodeDepths(root: BinaryTree) {
  // Write your code here.
  let answer = 0;
  const walk = (node: BinaryTree | null, depth: number) => {
    if (node === null) {
      return;
    }
    answer += depth;
    walk(node.left, depth + 1);
    walk(node.right, depth + 1);
  };

  walk(root, 0);
  return answer;
}

// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
