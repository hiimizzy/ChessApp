import React from 'react';
import Square from './Square';
import { Board, Position } from '../lib/type';
import { isValidMove } from '../lib/rules';

interface BoardProps {
  board: Board;
  selectedPosition: Position | null;
  validMoves: Position[];
  onSquareClick: (position: Position) => void;
}

const Board: React.FC<BoardProps> = ({
  board,
  selectedPosition,
  validMoves,
  onSquareClick,
}) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row" style={{ display: 'flex' }}>
          {row.map((piece, colIndex) => {
            const position: Position = [rowIndex, colIndex];
            const isSelected = selectedPosition
              ? selectedPosition[0] === rowIndex && selectedPosition[1] === colIndex
              : false;
              
            const isValid = validMoves.some(
              ([r, c]) => r === rowIndex && c === colIndex
            );

            return (
              <Square
                key={`${rowIndex}-${colIndex}`}
                piece={piece}
                position={position}
                isSelected={isSelected}
                isValidMove={isValid}
                onClick={() => onSquareClick(position)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;