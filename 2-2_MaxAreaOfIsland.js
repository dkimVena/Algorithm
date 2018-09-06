// Given a non-empty 2D array grid of 0's and 1's, 
// an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
// You may assume all four edges of the grid are surrounded by water.

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

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  
  for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[0].length; j++) {
          if(grid[i][j] !== 0)
              maxArea = Math.max(maxArea, checkArea(grid, i, j, 0));
      }
  }
  
  return maxArea;
};

const checkArea = (grid, i, j) => {
  let left = 0;
  let right = 0;
  let up = 0;
  let down = 0;
  
  grid[i][j] = 0;
  let areaCount = 1;
  
  if(i-1 >= 0 && grid[i-1][j] !== 0) {
      areaCount += checkArea(grid, i-1, j);
  }
  
  if(i+1 < grid.length && grid[i+1][j] !== 0) {
      areaCount += checkArea(grid, i+1, j);
  }
  
  if(j-1 >= 0 && grid[i][j-1] !== 0) {
      areaCount += checkArea(grid, i, j-1);
  }
  
  if(j+1 < grid[0].length && grid[i][j+1] !== 0) {
      areaCount += checkArea(grid, i, j+1);
  }
  
  return areaCount;
}
