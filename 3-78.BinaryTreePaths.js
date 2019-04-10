// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

// https://leetcode.com/problems/binary-tree-paths/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = [];

  const findPath = (root, arr) => {
    if (root === null) return;

    let tmpArr = [...arr];

    if (!root.left && !root.right) {
      tmpArr.push(root.val);
      result.push(tmpArr);
      return;
    }

    tmpArr.push(root.val);
    findPath(root.left, tmpArr);
    findPath(root.right, tmpArr);
  };

  findPath(root, new Array());
  result = result.map(item => {
    return item.join('->');
  });
  return result;
};
