// This is the class of the input root.
// Do not edit it.
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

const sum = (cur: BinaryTree | null, total: number, result: number[]) => {
  if (cur === null) {
    return;
  }
  const t = total + cur.value;
  if (cur.left === null && cur.right === null) {
    result.push(t);
    return;
  }
  sum(cur.left, t, result);
  sum(cur.right, t, result);
};
export function branchSums(root: BinaryTree): number[] {
  // Write your code here.
  const result: number[] = [];
  sum(root, 0, result);
  return result;
}

// running sum = how to handle running sum ?
// we need a variable to store the sum value
export function branchSums2(root: BinaryTree): number[] {
  const result: number[] = []; // push and pop

  // when push and when pop ?
  const stack: (BinaryTree | null)[] = [root];
  while (stack.length !== 0) {
    const currentNode = stack[stack.length - 1];
    if (!currentNode) {
      stack.pop();
      continue;
    }
    if (currentNode.left === null && currentNode.right === null) {
      // leaf node
      result.push(currentNode.value);

      console.log(result);
      stack.pop();
    } else {
      stack.push(currentNode.right);
      stack.push(currentNode.left);
    }
  }

  return result;
}

// recursive thinking
// iterative thinking

// leaf node 에서 수행해야할 작업은?
