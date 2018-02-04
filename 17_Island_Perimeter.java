// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally).
// The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
// One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
// Determine the perimeter of the island.
//
// Example:
//
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]
//
// Answer: 16
// Explanation: The perimeter is the 16 yellow stripes in the image below:

class Solution {
    public int islandPerimeter(int[][] grid) {
        int result = 0;
        int colSize = grid[0].length;
        int rowSize = grid.length;

        for(int row=0; rowSize>row; row++) {
            for(int col=0; colSize>col; col++) {

                if(grid[row][col] == 1) {
                    int temp = 4;

                    if(row-1>=0 && grid[row-1][col] == 1)
                        temp--;
                    if(row+1<rowSize && grid[row+1][col] == 1)
                        temp--;
                    if(col-1>=0 && grid[row][col-1] == 1)
                        temp--;
                    if(col+1<colSize && grid[row][col+1] == 1)
                        temp--;

                    result += temp;
                }
            }
        }

        return result;
    }
}
