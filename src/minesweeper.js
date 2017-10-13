
// begin 3rd evolution
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  //console.log('First Rows: ' + numberOfRows + ' First Columns: ' + numberOfColumns);
  for (let i = 0; i < numberOfRows; i++) {
      const row = [];
      //console.log('Second Rows: ' + numberOfRows + ' Second Columns: ' + numberOfColumns + ' i: ' + i);
    for (let j = 0; j < numberOfColumns; j++) {
      //console.log('Third Rows: ' + numberOfRows  + ' Third Columns: ' + numberOfColumns + ' i: ' + i  + ' j: ' + j);
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

console.log(generatePlayerBoard(2, 3));
// end 3rd evolution

/*
// begin 2nd evolution
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

//console.log('This is what an empty board would look like:');
//console.log(board);

const printBoard = board => {
  //console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

console.log('This is what an empty board would look like:');
printBoard(board);

board[0][1] = '1';
console.log('This is what a board with a guess on it would look like:');
printBoard(board);

board[2][2] = 'B';
console.log('This is what a board with a guess and a bomb on it would look like:');
printBoard(board);
// end 2nd evolution
*/

/*
// begin 1st evolution
const blankLine = '  |   |  ';

console.log('This is what an empty board would look like:');
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

const guessLine = '1 |   |  ';
const bombLine = '  | B |  ';

console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
// end 1st evolution
*/
