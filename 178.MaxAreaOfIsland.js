// Given a non-empty 2D array grid of 0's and 1's, an island is a group 
// of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
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
    let row = grid.length;
    let col = grid[0].length;
    let max = 0;
    
    for(let i=0; row>i; i++) {
        for(let j=0; col>j; j++) {
            if(grid[i][j] === 1) {
                grid[i][j] = 0;
                max = Math.max(max, checkIsland(grid, i, j) + 1);
            }
        }
    }
    
    return max;
};

var checkIsland = function(grid, row, col) {
    let cnt = 0;
    
    if(row - 1 >= 0 && grid[row - 1][col] === 1) {
        cnt++;
        grid[row - 1][col] = 0;
        cnt += checkIsland(grid, row - 1, col);
    }
    
    if(col - 1 >= 0 && grid[row][col - 1] === 1) {
        cnt++;
        grid[row][col - 1] = 0;
        cnt += checkIsland(grid, row, col - 1);
    }
    
    if(row + 1 < grid.length && grid[row + 1][col] === 1) {
        cnt++;
        grid[row + 1][col] = 0;
        cnt += checkIsland(grid, row + 1, col);
    }
    
    if(col + 1 < grid[0].length && grid[row][col + 1] === 1) {
        cnt++;
        grid[row][col + 1] = 0;
        cnt += checkIsland(grid, row, col + 1);
    }
        
    return cnt;
    
};