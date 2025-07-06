import React from 'react';
import { Piece as PieceType } from '../lib/type'; // Altere a importação

// Renomeie a interface
interface ChessPieceProps {
  piece: PieceType;
}

// Renomeie o componente para ChessPiece
const ChessPiece: React.FC<ChessPieceProps> = ({ piece }) => (
  <div className="piece" style={{ fontSize: '40px' }}>
    {getPieceUnicode(piece)}
  </div>
);

const getPieceUnicode = (piece: PieceType) => {
  const { type, color } = piece;
  const pieces = {
    white: {
      king: '♔',
      queen: '♕',
      rook: '♖',
      bishop: '♗',
      knight: '♘',
      pawn: '♙',
    },
    black: {
      king: '♚',
      queen: '♛',
      rook: '♜',
      bishop: '♝',
      knight: '♞',
      pawn: '♟',
    },
  };
  return pieces[color][type];
};

export default ChessPiece; // Exporte com o novo nome