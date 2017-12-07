/**
 * Minesweeper v2. Arrays.
 */

const board = [
	[' ', ' ', ' '], 
	[' ', ' ', ' '], 
	[' ', ' ', ' ']
];

const printBoard = board => {
	console.log('Current board: ');
	console.log(board[0].join(' | '));
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));
};

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);