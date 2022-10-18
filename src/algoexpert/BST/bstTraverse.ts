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

export function inOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (tree === null) return;
  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (tree === null) return;
  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (tree === null) return;
  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}

// inorder
// left current right
// inorder(left)
// array.append(current.val)
// inorder(right)
// create problem and solve problem
// 같은 행동을 반복하기.

// preorder
// postorder
