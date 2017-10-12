'use strict';

/*const board = [
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


printBoard(board);
board[0][1] = '1';
printBoard(board);
board[2][2] = 'B';*/

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  //console.log('First Rows: ' + numberOfRows + ' First Columns: ' + numberOfColumns);
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    //console.log('Second Rows: ' + numberOfRows + ' Second Columns: ' + numberOfColumns + ' i: ' + i);
    for (var j = 0; j < numberOfColumns; j++) {
      //console.log('Third Rows: ' + numberOfRows  + ' Third Columns: ' + numberOfColumns + ' i: ' + i  + ' j: ' + j);
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

console.log(generatePlayerBoard(4, 8));
console.log(generatePlayerBoard(2, 4));
console.log(generatePlayerBoard(2, 6));
console.log(generatePlayerBoard(3, 6));

/*const generatePlayerBoard = function = (numberOfRows, numberofColumns) => {
  let board = [];
  for (let i = 0; i < board.length; i++) {
    let row = [];
    for (let j = 0; i < board[i].length; j++) {
        row.push(' ');
    }
    board.push(row);
  }
  return board;
};*/

/*generatePlayerBoard(2,4);
generatePlayerBoard(3,6);
generatePlayerBoard(7,2);
*/