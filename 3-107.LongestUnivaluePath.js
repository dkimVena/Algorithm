// Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

// The length of path between two nodes is represented by the number of edges between them.

// Example 1:

// Input:

//               5
//              / \
//             4   5
//            / \   \
//           1   1   5
// Output: 2

// Example 2:

// Input:

//               1
//              / \
//             4   5
//            / \   \
//           4   4   5
// Output: 2

// https://leetcode.com/problems/longest-univalue-path/

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
var longestUnivaluePath = function(root) {
  if (root === null) return 0;

  const findPath = (node, depth) => {
    if (node === null) return 0;
    let left = 0;
    let right = 0;

    if (node.left && node.left.val === node.val)
      left = findPath(node.left, depth + 1);
    if (node.right && node.right.val === node.val)
      right = findPath(node.right, depth + 1);

    if (depth === 0) return left + right;
    else return Math.max(left, right, depth);
  };

  return Math.max(
    findPath(root, 0),
    longestUnivaluePath(root.left),
    longestUnivaluePath(root.right)
  );
};
