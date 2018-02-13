// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed
// to the original key plus sum of all keys greater than the original key in BST.
//
// Example:
//
// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13
//
// Output: The root of a Greater Tree like this:
//              18
//             /   \
//           20     13

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    int max = 0;
    public TreeNode ConvertBST(TreeNode root)
    {
        if (root == null)
        {
            return null;
        }

        ConvertBST(root.right);
        root.val += max;
        max = root.val;
        ConvertBST(root.left);

        return root;
    }
}
