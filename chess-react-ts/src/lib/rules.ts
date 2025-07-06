import { Board, Piece, PieceType, Position } from './type';

export const createInitialBoard = (): Board => {
  const board: Board = Array(8).fill(null).map(() => Array(8).fill(null));

  // Peças pretas
  board[0] = [
    { type: 'rook', color: 'black' },
    { type: 'knight', color: 'black' },
    { type: 'bishop', color: 'black' },
    { type: 'queen', color: 'black' },
    { type: 'king', color: 'black' },
    { type: 'bishop', color: 'black' },
    { type: 'knight', color: 'black' },
    { type: 'rook', color: 'black' },
  ];

  for (let i = 0; i < 8; i++) {
    board[1][i] = { type: 'pawn', color: 'black' };
  }

  // Peças brancas
  board[7] = [
    { type: 'rook', color: 'white' },
    { type: 'knight', color: 'white' },
    { type: 'bishop', color: 'white' },
    { type: 'queen', color: 'white' },
    { type: 'king', color: 'white' },
    { type: 'bishop', color: 'white' },
    { type: 'knight', color: 'white' },
    { type: 'rook', color: 'white' },
  ];

  for (let i = 0; i < 8; i++) {
    board[6][i] = { type: 'pawn', color: 'white' };
  }

  return board;
};

export const isValidMove = (
  board: Board,
  from: Position,
  to: Position
): boolean => {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  const piece = board[fromRow][fromCol];
  
  if (!piece) return false;
  
  // Implementação básica (apenas exemplo)
  if (piece.type === 'pawn') {
    const direction = piece.color === 'white' ? -1 : 1;
    return (
      (toCol === fromCol && toRow === fromRow + direction) ||
      (Math.abs(toCol - fromCol) === 1 && toRow === fromRow + direction)
    );
  }
  
  return true; // Para outras peças (implementar regras completas depois)
};