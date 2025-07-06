import React from 'react';
import Piece from './Piece';
import { Piece as PieceType, Position } from '../lib/type';

interface SquareProps {
  piece: PieceType | null;
  position: Position;
  isSelected: boolean;
  isValidMove: boolean;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({
  piece,
  position,
  isSelected,
  isValidMove,
  onClick,
}) => {
  const [row, col] = position;
  const isDark = (row + col) % 2 === 1;

  return (
    <div
      className={`square ${isDark ? 'dark' : 'light'} ${isSelected ? 'selected' : ''} ${isValidMove ? 'valid-move' : ''}`}
      onClick={onClick}
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: isDark ? '#769656' : '#eeeed2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: isSelected ? '3px solid blue' : 'none',
        boxShadow: isValidMove ? 'inset 0 0 10px 3px yellow' : 'none',
      }}
    >
      {piece && <Piece piece={piece} />}
    </div>
  );
};

export default Square;