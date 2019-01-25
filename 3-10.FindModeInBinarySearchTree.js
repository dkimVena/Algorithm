// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

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

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

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
  if(root === null) return [];
  let map = {};
  find(root, map);
  return findMax(map);
};

const find = (root, map) => {
  if(root === null) return;
  map[root.val] = (map[root.val] + 1) || 1;
  find(root.left, map);
  find(root.right, map);
}

const findMax = map => {
  let result = [];
  let tmp = [];
  
  for (var item in map) {
    tmp.push([item, map[item]]);
  }

  tmp.sort(function(a, b) {
      return b[1] - a[1];
  });
  
  result.push(tmp[0][0]);
  
  for(let i=1; i<tmp.length; i++) {
    if(tmp[i][1] === tmp[0][1]) result.push(tmp[i][0]);
  }
  
  return result;
}