// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:
// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 9

// Output: True
// Example 2:
// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 28

// Output: False

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let check = [];
  let result = help(root, k, check);
  return result;
};

let help = (root, target, check) => {
  if(root === null) return false;
  
  let result = false;
  
  if(checkTarget(root, check)) result = true;
  else {
      check.push(target - root.val);
      if(help(root.left, target, check)) result = true;
      if(result !== true && help(root.right, target, check)) result = true;
  }
  return result;
};

let checkTarget = (root, check) => {
  for(let i=0; i<check.length; i++) {
      if(check[i] === root.val) return true;
  }
  return false;
} 
