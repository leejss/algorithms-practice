// This is an input class. Do not edit.
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(tree: BST) {
  const validateBstHelper = (
    tree: BST | null,
    min: number,
    max: number
  ): boolean => {
    if (tree === null) return true;
    if (tree.value < min || tree.value >= max) {
      return false;
    }
    const leftTreeValid = validateBstHelper(tree.left, min, tree.value);
    const rightTreeValid = validateBstHelper(tree.right, tree.value, max);
    return leftTreeValid && rightTreeValid;
  };
  return validateBstHelper(tree, -Infinity, Infinity);
}

// BST properties
// 1. current.left.value < current.value
// 2. current.right >= current.value

// BST minimum value and maximum value
// left subtree and right subtree

// maximum value of left subtree
// minimum value of right subtree

// 스페셜 테크닉 - returning helper function
