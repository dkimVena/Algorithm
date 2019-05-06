// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let result = new ListNode();
  if (!l1 && !l2) return null;

  const makeNode = (node, l1, l2) => {
    if (l1 === null) {
      node.val = l2.val;
      node.next = l2.next;
      return;
    } else if (l2 === null) {
      node.val = l1.val;
      node.next = l1.next;
      return;
    }

    if (l1.val > l2.val) {
      node.val = l2.val;
      l2 = l2.next;
      node.next = new ListNode();
      makeNode(node.next, l1, l2);
    } else {
      node.val = l1.val;
      l1 = l1.next;
      node.next = new ListNode();
      makeNode(node.next, l1, l2);
    }
  };

  makeNode(result, l1, l2);
  return result;
};
