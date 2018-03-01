// Given a 2D integer matrix M representing the gray scale of an image,
// you need to design a smoother to make the gray scale of each cell
// becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself.
// If a cell has less than 8 surrounding cells, then use as many as you can.
//
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
    var rowLen = M.length;

    if(rowLen == 0) return result;

    var colLen = M[0].length;

    var result = new Array(rowLen);
    for(var i=0; rowLen>i; i++) {
        result[i] = new Array(colLen);
    }

    for(var i=0; rowLen>i; i++) {
        for(var j=0; colLen>j; j++) {
            var count = 1;
            var value = M[i][j];

            if(i-1 >= 0) {
                count++;
                value += M[i-1][j];
            }

            if(j-1 >= 0) {
                count++;
                value += M[i][j-1];
            }

            if(i-1 >=0 && j-1 >=0) {
                count++;
                value += M[i-1][j-1];
            }

            if(i-1 >=0 && j+1 < colLen) {
                count++;
                value += M[i-1][j+1];
            }

            if(i+1 < rowLen) {
                count++;
                value += M[i+1][j];
            }

            if(j+1 < colLen) {
                count++;
                value += M[i][j+1];
            }

            if(i+1 < rowLen && j+1 < colLen) {
                count++;
                value += M[i+1][j+1];
            }

            if(i+1 < rowLen && j-1 >=0) {
                count++;
                value += M[i+1][j-1];
            }

            result[i][j] = Math.floor(value/count);
        }
    }
    return result;
};
