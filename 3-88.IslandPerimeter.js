// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example:

// Input:
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Output: 16

// Explanation: The perimeter is the 16 yellow stripes in the image below:

// https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let count = 0;
  let colSize = grid[0].length;
  let rowSize = grid.length;

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (grid[i][j] === 1) {
        if ((i - 1 >= 0 && grid[i - 1][j] === 0) || i - 1 < 0) count++;
        if ((j - 1 >= 0 && grid[i][j - 1] === 0) || j - 1 < 0) count++;
        if ((i + 1 < rowSize && grid[i + 1][j] === 0) || i + 1 >= rowSize)
          count++;
        if ((j + 1 < colSize && grid[i][j + 1] === 0) || j + 1 >= colSize)
          count++;
      }
    }
  }

  return count;
};
