// Given a singly linked list, determine if it is a palindrome.

// Follow up:
// Could you do it in O(n) time and O(1) space?

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
var isPalindrome = function(head) {
    let half;
    let originHead = head;
    let found = false;
    let count = 1;
    let countHalf = 1;
    
    if(head === null || head.next === null) return true;
    
    while(head.next !== null) {
        head = head.next;
        count++;
    }
    
    head = originHead;
    
    while(head !== null) {
        if(Math.round(count / 2) + 1 === countHalf) {
            half = head;
            break;
        }
        head = head.next;
        countHalf++;
    }

    let cur = half;   
    var newNode = null;

    while(cur != null) {
        var next = cur.next;
        cur.next = newNode;
        newNode = cur;
        cur = next;
    }
    
    while(newNode !== null) {
        if(originHead.val !== newNode.val) return false;
        originHead = originHead.next;
        newNode = newNode.next;
    }
    
    return true;
        
};
