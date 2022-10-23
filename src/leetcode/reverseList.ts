// https://leetcode.com/problems/reverse-linked-list/?envType=study-plan&id=level-1

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null; //initial prev
    let cursor = head; // assignment
    let next = null; // initial next
    while (cursor) {
        next = cursor.next; // last node인 경우 null
        cursor.next = prev;
        prev = cursor;
        cursor = next; // it becomes the last !
    }
    head = prev; // points to the last node
    return head;
}

// function reverseListRecursively(head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   `
//     fist node and the rest
//     variable points to a certain node

//       1    2    3    null
//     head

//   `;

//   const rest = reverseListRecursively(head.next);
// }
