// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, 
// empty slots are represented with '.'s. You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, 
// they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
// Example:
// X..X
// ...X
// ...X
// In the above board there are 2 battleships.
// Invalid Example:
// ...X
// XXXX
// ...X
// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
// Follow up:
// Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    let sizeY = board.length;
    let sizeX = board[0].length;
    
    for(let i=0; sizeY>i; i++) {
        for(let j=0; sizeX>j; j++) {
            if(board[i][j] === 'X') {
                help(i, j, board);
                count++;
            }
        }
    }
    
    return count;
};

var help = function(x, y, board) {
    if(board[x][y] === '.') return;
    
    board[x][y] = '.';
    if(x-1 >= 0 && board[x-1][y] === 'X') help(x-1, y, board);
    if(x+1 < board.length && board[x+1][y] === 'X') help(x+1, y, board);
    if(y-1 >= 0 && board[x][y-1] === 'X') help(x, y-1, board);
    if(y+1 < board[0].length && board[x][y+1] === 'X') help(x, y+1, board);
};