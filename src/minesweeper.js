
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

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    const board = [];
    //console.log('First Rows: ' + numberOfRows + ' First Columns: ' + numberOfColumns);
    for (let i = 0; i < numberOfRows; i++) {
        const row = [];
        //console.log('Second Rows: ' + numberOfRows + ' Second Columns: ' + numberOfColumns + ' i: ' + i);
      for (let j = 0; j < numberOfColumns; j++) {
        //console.log('Third Rows: ' + numberOfRows  + ' Third Columns: ' + numberOfColumns + ' i: ' + i  + ' j: ' + j);
        row.push(null);
      }
      board.push(row);
    }

    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
        //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs.
        //This will be fixed when you learn about control flow
    }

    return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
  /*//console.log(board.map(row => {
        row.join(' | ').join('\n');
  //});*/
};

let playerBoard = generatePlayerBoard(3, 4);
let playerBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

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
