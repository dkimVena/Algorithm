// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let arrRow = grid.length;
  let arrCol = grid[0].length;
  let arr = grid;
  let max = 0;

  const findIsland = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= arrRow ||
      col >= arrCol ||
      arr[row][col] === 0
    )
      return 0;
    else {
      arr[row][col] = 0;
      return (
        1 +
        findIsland(row - 1, col) +
        findIsland(row + 1, col) +
        findIsland(row, col - 1) +
        findIsland(row, col + 1)
      );
    }
  };

  for (let i = 0; i < arrRow; i++) {
    for (let j = 0; j < arrCol; j++) {
      if (arr[i][j] === 1) {
        max = Math.max(max, findIsland(i, j));
      }
    }
  }
  return max;
};
