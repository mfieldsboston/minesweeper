
// begin 4th evolution
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
    onsole.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

// end 4th evolution
