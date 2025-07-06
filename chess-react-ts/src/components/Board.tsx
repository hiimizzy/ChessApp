import React from 'react';
import Square from './Square';
import { Board as BoardType, Position } from '../lib/type'; // Altere o nome na importação
import { isValidMove } from '../lib/rules';

// Mude o nome da interface também
interface ChessBoardProps {
  board: BoardType;
  selectedPosition: Position | null;
  validMoves: Position[];
  onSquareClick: (position: Position) => void;
}

// Renomeie o componente para ChessBoard
const ChessBoard: React.FC<ChessBoardProps> = ({
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

export default ChessBoard; // Exporte com o novo nome