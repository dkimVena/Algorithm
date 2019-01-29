// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.

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
var averageOfLevels = function(root) {
  let arr = [];
  let depths = [];
  
  const check = (root, depth) =>{
      if(!root) return;
      
      if(arr.length < depth) {
          arr.push(root.val);
          depths.push(1);
      } else if(arr.length > depth) {
          arr[depth-1] += root.val;
          depths[depth - 1] += 1;
      } else {
          arr[arr.length - 1] += root.val;
          depths[depth - 1] += 1;
      }
      
      check(root.left, depth + 1);
      check(root.right, depth + 1);
  }
  check(root, 1);
  arr = arr.map((item, i) => {
      return item / depths[i];
      });
  return arr;
};