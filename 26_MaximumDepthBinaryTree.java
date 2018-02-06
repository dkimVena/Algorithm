// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        int depth = 0;
        int result = search(root, depth);
        return result;
    }

    public int search(TreeNode root, int depth) {
        if(root == null)
            return 0;

        depth += 1;
        int leftDepth = 0, rightDepth = 0;

        if(root.left != null) {
            leftDepth = search(root.left, leftDepth);
        }

        if(root.right != null) {
            rightDepth = search(root.right, rightDepth);
        }
        return leftDepth > rightDepth ? depth + leftDepth : depth + rightDepth;
    }
}
