// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
//
// For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more than 1.
//
//
// Example:
//
// Given the sorted array: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return new Array();

    var rootNode = makeTree(nums, 0, nums.length - 1);

    return rootNode;
};

var makeTree = function(nums, low, high) {
    if(low > high) return null;

    var mid = Math.floor((low + high) / 2);

    var node = new TreeNode(nums[mid]);

    node.left = makeTree(nums, low, mid-1);
    node.right = makeTree(nums, mid+1, high);

    return node;
};
