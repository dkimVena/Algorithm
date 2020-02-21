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
  let max = 0;
  let copy = [...grid];
  
  let getArea = (r, c, count) => {
      let total = 0;
      if(r >= 0 && r < grid.length && c >= 0 && c < grid[0].length) {
          if(copy[r][c] === 1) {
              total = 1;
              copy[r][c] = 0;
              total += getArea(r+1, c);
              total += getArea(r-1, c);
              total += getArea(r, c+1);
              total += getArea(r, c-1);
          }   
      }
      return total;
  }
  
  for(let i=0; i<grid.length; i++) {
      for(let j=0; j<grid[0].length; j++) {
          if(grid[i][j] === 1) {
              max = Math.max(max, getArea(i, j, 0));
          }
      }
  }
  
  return max;
};