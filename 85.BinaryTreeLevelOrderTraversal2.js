// Given a binary tree, return the bottom-up level order traversal of its nodes' values.
// (ie, from left to right, level by level from leaf to root).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let result = new Array();
    let depth = 1;

    if(root == null) return result;
    result.push([root.val]);

    searchTree(root.left, result, depth);
    searchTree(root.right, result, depth);

    return  result.reverse();
};

var searchTree = function(root, result, depth) {
    if(root == null) return null;
    if(result[depth] == undefined)
        result.push([root.val]);
    else{
        result[depth] = [...result[depth], root.val];
    }
    searchTree(root.left, result, depth+1);
    searchTree(root.right, result, depth+1);
};
