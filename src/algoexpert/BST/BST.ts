// AST of BST

// 1. insert a node
// 2. remove a node
// 3. search a node

class BST {
  value: number;
  right: BST | null;
  left: BST | null;

  constructor(
    value: number,
    right: BST | null = null,
    left: BST | null = null
  ) {
    this.value = value;
    this.right = right;
    this.left = left;
  }

  insert(value: number) {
    let current = this as BST;
    while (true) {
      // iterative - current node is moving
      if (value < current.value) {
        if (current.left === null) {
          // create new BST and insert
          current.left = new BST(value); // insert left
          break;
        } else {
          current = current.left;
        }
      } else {
        // go right
        if (current.right === null) {
          current.right = new BST(value);
        } else {
          current = current.right;
        }
      }
    }
  }
  contains(value: number) {
    let current = this as BST | null; // cursor
    while (current !== null) {
      // comparison
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  remove(value: number, parentNode: BST | null = null) {
    // grap a smallest value in the right subtree -> BST properties를 만족하는 node로 교체.
    let current = this as BST | null;
    while (current !== null) {
      // compare and move!
      if (value < current.value) {
        // go left
        parentNode = current;
        current = current.left;
      } else if (value > current.value) {
        // go right
        parentNode = current;
        current = current.right;
      } else {
        // Found the node waiting to delete it.
        if (current.left !== null && current.right !== null) {
          current.value = current.right.getMinValue();
          // remove right's min value
          current.right.remove(current.value, current);
        } else if (parentNode === null) {
          // what cases ?
          // children이 1개 이하 이면서 parentNode가 없는 경우
          if (current.left !== null) {
            // left node가 있는 경우
            current.value = current.left.value;
            current.right = current.left.right;
            current.left = current.left.left;
          }
          if (current.right !== null) {
            // right node가 있는 경우
            current.value = current.right.value;
            current.left = current.right.left;
            current.right = current.right.right;
          }
        } else if (parentNode.left === current) {
          // current node가 parent의 left node인 경우, 자식노드가 1개 이하 인 경우
          parentNode.left = current.left ? current.left : current.right; // null 또는 BST
        } else if (current.right === current) {
          parentNode.right = current.left ? current.left : current.right;
        }
      }
    }
  }
  getMinValue(): number {
    let current = this as BST;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}
