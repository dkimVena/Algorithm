// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let cur = head;
  let prev;

  while (cur !== null) {
    if (cur.val === val) {
      if (prev) prev.next = cur.next;
      else head = head.next;
      cur = cur.next;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
};
