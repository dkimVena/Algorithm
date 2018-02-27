// Reverse a singly linked list.

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
var reverseList = function(head) {
    var newNode = null;

    while(head != null) {
        var next = head.next;
        head.next = newNode;
        newNode = head;
        head = next;
    }
    return newNode;
};
