// Remove all elements from a linked list of integers that have value val.

// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5

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
    let prev;
    while(head !== null) {
        if(head.val === val)
            head = head.next;
        else
            break;
    }
    
    let returnHead = head;
    
    while(head !== null) {
        if(head.val === val) {
            prev.next = head.next;
            head = head.next;
        } else {
            prev = head;
            head = head.next;
        }
    }
    return returnHead;
};