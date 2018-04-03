// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    if(head === null) return false;
    
    let normal = head;
    let fast = head;
    
    while(fast.next !== null && fast.next.next != null) {
        normal = normal.next;
        fast = fast.next.next;
        if(normal === fast) return true;
    }
    return false;
};