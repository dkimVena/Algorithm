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
  if (root === null) return Number.POSITIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  min = Math.min(help(root.left, root.val), help(root.right, root.val));

  min = Math.min(min, getMinimumDifference(root.left));
  min = Math.min(min, getMinimumDifference(root.right));
  return min;
};

const help = (root, val) => {
  if (root === null) return Number.POSITIVE_INFINITY;

  let min = Math.min(Math.abs(root.val - val));
  min = Math.min(min, help(root.left, val));
  min = Math.min(min, help(root.right, val));
  return min;
};
