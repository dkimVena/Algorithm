// Given a binary tree, return all root-to-leaf paths.

// For example, given the following binary tree:

//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:

// ["1->2->5", "1->3"]
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
    if(!root) return [];
    let result = [];
       
    makePath(result, '', root);
    
    return result;
};

var makePath = function(result, str, root) {
    if(root == null) return;
    str += root.val;
    
    if(root.left != null)
        makePath(result, str + "->", root.left);
    
    if(root.right != null)
        makePath(result, str + "->", root.right);
    
    if(root.left == null && root.right == null)
        result.push(str);
}