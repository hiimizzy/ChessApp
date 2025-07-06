import React from 'react';
import { Piece } from '../lib/type';

const getPieceUnicode = (piece: Piece) => {
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

interface PieceProps {
  piece: Piece;
}

const Piece: React.FC<PieceProps> = ({ piece }) => (
  <div className="piece" style={{ fontSize: '40px' }}>
    {getPieceUnicode(piece)}
  </div>
);

export default Piece;