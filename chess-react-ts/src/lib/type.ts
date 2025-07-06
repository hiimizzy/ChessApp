export type PieceType = 
  | 'pawn'
  | 'rook'
  | 'knight'
  | 'bishop'
  | 'queen'
  | 'king';

export type PieceColor = 'white' | 'black';

export interface Piece {
  type: PieceType;
  color: PieceColor;
}

export type Position = [number, number]; // [linha, coluna]

export type Board = (Piece | null)[][];

export interface GameState {
  board: Board;
  currentPlayer: PieceColor;
  selectedPosition: Position | null;
  validMoves: Position[];
}