// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

// Example:

// Input:

//    1
//     \
//      3
//     /
//    2

// Output:
// 1

// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

// https://leetcode.com/problems/minimum-absolute-difference-in-bst/

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
var getMinimumDifference = function(root) {
  let sortedArr = [];
  let min = Number.MAX_SAFE_INTEGER;
  let last = Number.MAX_SAFE_INTEGER;
  const traverse = (node) => {
      if(node === null) return;
      traverse(node.left);
      min = Math.min(min, Math.abs(node.val - last));
      last = node.val;
      traverse(node.right);
  }
  traverse(root);
  return min;
};
