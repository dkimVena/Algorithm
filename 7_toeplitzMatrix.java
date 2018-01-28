// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
//
// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
//
// Example 1:
//
// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: True
// Explanation:
// 1234
// 5123
// 9512
//
// In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer is True.
// Example 2:
//
// Input: matrix = [[1,2],[2,2]]
// Output: False
// Explanation:
// The diagonal "[1, 2]" has different elements.
// Note:
//
// matrix will be a 2D array of integers.
// matrix will have a number of rows and columns in range [1, 20].
// matrix[i][j] will be integers in range [0, 99].

class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        int matSize = matrix.length;
        int matInSize = matrix[0].length;
        int[] tempArr1;
        int[] tempArr2;

        for(int i=0; matSize-1>i; i++) {
            tempArr1 = Arrays.copyOf(matrix[i], matInSize-1);
            tempArr2 = Arrays.copyOfRange(matrix[i+1], 1, matInSize);

            if(!Arrays.equals(tempArr1, tempArr2))
                return false;
        }
        return true;
    }
}
