/*const blankLine = '  |   |  '
const guessLine = '1 |   |  '
const bombLine = '  | B |  '
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);*/

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

const printBoard = board => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

//console.log(board);
printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
