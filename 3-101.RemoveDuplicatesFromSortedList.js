// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let prev;

  let cur = head;

  while (cur !== null) {
    if (!prev) {
      prev = cur;
      cur = cur.next;
    } else if (prev.val !== cur.val) {
      prev.next = cur;
      prev = cur;
      cur = cur.next;
    } else {
      prev.next = cur.next;
      cur = cur.next;
    }
  }
  return head;
};
