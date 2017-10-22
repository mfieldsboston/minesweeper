'use strict';

// begin 4th evolution
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

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    //console.log('First Rows: ' + numberOfRows + ' First Columns: ' + numberOfColumns);
    for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        //console.log('Second Rows: ' + numberOfRows + ' Second Columns: ' + numberOfColumns + ' i: ' + i);
        for (var j = 0; j < numberOfColumns; j++) {
            //console.log('Third Rows: ' + numberOfRows  + ' Third Columns: ' + numberOfColumns + ' i: ' + i  + ' j: ' + j);
            row.push(null);
        }
        board.push(row);
    }

    var numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
        //board[randomRowIndex][randomColumnIndex] = 'B';
        //numberOfBombsPlaced++;
    }

    return board;
};

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
    var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    var numberOfRows = bombBoard.length;
    var numberOfColumns = bombBoard[0].length;

    var numberOfBombs = 0;

    neighborOffsets.forEach(function (offset) {
        var neighborRowIndex = rowIndex + offset[0];
        var neighborColumnIndex = columnIndex + offset[1];
        // if (neighborRowIndex >= 0 && numberOfRows > neighborRowIndex && neighborColumnIndex >= 0 && numberOfColumns > neighborColumnIndex) {
        //     if(bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        //         numberOfBombs++;
        //     }
        // }
        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
            if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                numberOfBombs++;
            }
        }
    });

    return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
    if (playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped!');
        return;
    } else if (bombBoard[rowIndex][columnIndex] === 'B') {
        playerBoard[rowIndex][columnIndex] = 'B';
    } else {
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
    }
};

var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board');

printBoard(playerBoard);

// end 4th evolution