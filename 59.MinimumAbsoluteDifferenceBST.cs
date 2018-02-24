// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
//
// Example:
//
// Input:
//
//    1
//     \
//      3
//     /
//    2
//
// Output:
// 1
//
// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution
    {
        int min = int.MaxValue;
        TreeNode prev = null;
        public int GetMinimumDifference(TreeNode root)
        {
            if (root == null) return min;

            GetMinimumDifference(root.left);

            if (prev != null) min = Math.Min(min, Math.Abs(prev.val - root.val));
            prev = root;

            GetMinimumDifference(root.right);
            return min;
        }

    }
