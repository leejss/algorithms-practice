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

export function findClosestValueInBst(tree: BST, target: number) {
  // Write your code here.
  let minDiff = Infinity; // keep udpate this value
  let closestValue = Infinity;
  let current: BST | null = tree;
  while (current !== null) {
    const diff = Math.abs(current.value - target);
    if (diff < minDiff) {
      minDiff = diff;
      closestValue = current.value;
    }
    if (target < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return closestValue;
}

// Notes
// closest value를 계속 업데이트.
// closest value -> absolute difference
// compare node's value

// 얼마나 반복할 것인가?
