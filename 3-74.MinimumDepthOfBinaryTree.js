// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

// https://leetcode.com/problems/minimum-depth-of-binary-tree/

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
var minDepth = function(root) {
  let min = Number.MAX_SAFE_INTEGER;
  if(root === null) return 0;
  
  const findDepth = (root, depth) => {
      if(root === null) return;
      let curDepth = depth + 1;
      
      if(root.left === null && root.right === null) min = Math.min(curDepth, min);
      findDepth(root.left, curDepth);
      findDepth(root.right, curDepth);
  }
  findDepth(root, 0);
  return min;
};