// https://leetcode.com/problems/check-if-move-is-legal/
// 1958. Check if Move is Legal


/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
  console.log('color:',color)
  for (const v of board) console.log.apply(console, v);

  let [m, n] = [board.length, board[0].length];
  let moveDirection = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
  for (let [dr, dc] of moveDirection) {
    let [i, j] = [rMove + dr, cMove + dc];
    let size = 2;
    while (i >= 0 && i < m && j >= 0 && j < n) {
      if (board[i][j] === '.' || size < 3 && board[i][j] === color) break;
      if (board[i][j] === color) return true;
      i += dr;
      j += dc;
      size += 1;
    }
  }
  return false;
};


[board, rMove, cMove, color] = [[[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]], 4, 3, "B"];
console.log(checkMove(board, rMove, cMove, color));
// Output: true
[board, rMove, cMove, color] = [[[".",".",".",".",".",".",".","."],[".","B",".",".","W",".",".","."],[".",".","W",".",".",".",".","."],[".",".",".","W","B",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".","B","W",".","."],[".",".",".",".",".",".","W","."],[".",".",".",".",".",".",".","B"]], 4, 4, "W"];
console.log(checkMove(board, rMove, cMove, color));
// Output: false
