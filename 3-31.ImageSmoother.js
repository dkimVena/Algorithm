// Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

// Example 1:
// Input:
// [[1,1,1],
//  [1,0,1],
//  [1,1,1]]
// Output:
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]
// Explanation:
// For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0
// Note:
// The value in the given matrix is in the range of [0, 255].
// The length and width of the given matrix are in the range of [1, 150].

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let rowL = M.length;
  let colL = M[0].length;
  let result = [...Array(rowL)].map(x=>Array(colL).fill(0)); 
  
  const check = (row, col) => {
      let sum = M[row][col];
      let count = 1;
      
      if(row - 1 >= 0) {
          sum += M[row-1][col];
          count++;
      }
      if(row + 1 < rowL) {
          sum += M[row+1][col];
          count++;
      }
      if(col - 1 >= 0) {
          sum += M[row][col-1];
          count++;
      }
      if(col + 1 < colL) {
          sum += M[row][col+1];
          count++;
      }
      
      if(row - 1 >= 0 && col - 1 >= 0) {
          sum += M[row-1][col-1];
          count++;
      }
      if(row - 1 >= 0 && col + 1 < colL) {
          sum += M[row-1][col+1];
          count++;
      }
      
      if(row + 1 < rowL && col - 1 >= 0) {
          sum += M[row+1][col-1];
          count++;
      }
      if(row + 1 < rowL && col + 1 < colL) {
          sum += M[row+1][col+1];
          count++;
      }
      return Math.floor(sum/count);
  }
  
  for(let row=0; row<rowL; row++) {
      for(let col=0; col<colL; col++) {
          result[row][col] = check(row, col);
      }
  }
  return result;
};

