// Given a 2D integer matrix M representing the gray scale of an image, 
// you need to design a smoother to make the gray scale of each cell becomes the average gray scale 
// (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, 
// then use as many as you can.

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
  let rowSize = M.length;
  let colSize = M[0].length;
  let result = new Array(rowSize);
  
  for(let i=0; i<result.length; i++) {
      result[i] = new Array(colSize);
  }
  
  for(let i=0; i<rowSize; i++) {
      for(let j=0; j<colSize; j++) {
          let sum = M[i][j];
          let count = 1;
          
          if(i-1 >= 0) {
              sum += M[i-1][j];
              count++;
              
              if(j-1 >= 0) {
                  sum += M[i-1][j-1];
                  count++;
              }

              if(j+1 < colSize) {
                  sum += M[i-1][j+1];
                  count++;
              }
          }
          
          if(j-1 >= 0) {
              sum += M[i][j-1];
              count++;
          }
          
          if(j+1 < colSize) {
              sum += M[i][j+1];
              count++;
          }
          
          if(i+1 < rowSize) {
              sum += M[i+1][j];
              count++;
              
              if(j-1 >= 0) {
                  sum += M[i+1][j-1];
                  count++;
              }
              if(j+1 < colSize) {
                  sum += M[i+1][j+1];
                  count++;
              }
          }
          result[i][j] = Math.floor(sum / count);
      }
  }
  
  return result;
};
