// Given a Binary Search Tree and a target number,
// return true if there exist two elements in the BST such that their sum is equal to the given target.
//
// Example 1:
// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Target = 9
//
// Output: True
// Example 2:
// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Target = 28
//
// Output: False

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
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    boolean flag = false;

    public boolean findTarget(TreeNode root, int k) {
        if (root == null)
            return false;

        if (flag == true)
            return true;
        else {
            if (map.get(k - root.val) != null) {
                return flag = true;
            }
            map.put(root.val, root.val);

            boolean left = findTarget(root.left, k);
            boolean right = findTarget(root.right, k);

            return flag;
        }
    }
}
