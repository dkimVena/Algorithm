// Given a binary search tree (BST) with duplicates, 
// find all the mode(s) (the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
// For example:
// Given BST [1,null,2,2],
//    1
//     \
//      2
//     /
//    2
// return [2].

// Note: If a tree has more than one mode, you can return them in any order.

// Follow up: Could you do that without using any extra space? 
// (Assume that the implicit stack space incurred due to recursion does not count).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let check = {};
    check.arr = [];
    check.max = 0;
    findSomthing(root, check);
    return check.arr;
};

var findSomthing = function(root, check) {
    if(root === null) return null;
    
    let  mid = findMax(root, root.val);
    let left = findSomthing(root.left, check);
    let right = findSomthing(root.right, check);

    if(check.max < mid) {
        check.arr = [root.val];
        check.max = mid;
    }
    else if(check.max === mid)
        check.arr.push(root.val);
    
    if(check.max < left) {
        check.arr = [root.left.val];
        check.max = left;
    }
    else if(check.max === left)
        check.arr.push(root.left.val);
    
    if(check.max < right) {
        check.arr = [root.right.val];
        check.max = right;
    }
    else if(check.max === right)
        check.arr.push(root.right.val);
    
}

var findMax = function(root, target) {
    if(root === null) return 0;
    
    if(target === root.val)
        return 1 + findMax(root.left, target) + findMax(root.right, target);
    else
        return findMax(root.left, target) + findMax(root.right, target);
}