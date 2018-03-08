// Given a non-empty special binary tree consisting of nodes with the non-negative value,
// where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes,
// then this node's value is the smaller value among its two sub-nodes.
//
// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
//
// If no such second minimum value exists, output -1 instead.
//
// Example 1:
// Input:
//     2
//    / \
//   2   5
//      / \
//     5   7
//
// Output: 5
// Explanation: The smallest value is 2, the second smallest value is 5.
// Example 2:
// Input:
//     2
//    / \
//   2   2
//
// Output: -1
// Explanation: The smallest value is 2, but there isn't any second smallest value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    var min = root.val;

    var minLeft = findNextMin(root.left, min);
    var minRight = findNextMin(root.right, min);

    if(minLeft == min && minRight == min)
        return -1;
    else if(minLeft == Number.MAX_SAFE_INTEGER && minRight == Number.MAX_SAFE_INTEGER)
        return -1;
    else return Math.min(minLeft, minRight);
};

var findNextMin = function(node, min) {

    if(node == null) return Number.MAX_SAFE_INTEGER;

    if(node.val != min) {
        return node.val;
    } else {
        return Math.min(findNextMin(node.left, min), findNextMin(node.right, min));
    }
};
