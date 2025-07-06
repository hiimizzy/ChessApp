import React, { useState } from 'react';
import Board from './Board';
import { createInitialBoard, isValidMove } from '../lib/rules';
import { Board as BoardType, Position } from '../lib/type';

const Game: React.FC = () => {
  const [board, setBoard] = useState<BoardType>(createInitialBoard());
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [validMoves, setValidMoves] = useState<Position[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<'white' | 'black'>('white');

  const handleSquareClick = (position: Position) => {
    const [row, col] = position;
    const clickedPiece = board[row][col];


    if (clickedPiece && clickedPiece.color === currentPlayer) {
      setSelectedPosition(position);
      
      const moves: Position[] = [];
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (isValidMove(board, position, [r, c])) {
            moves.push([r, c]);
          }
        }
      }
      setValidMoves(moves);
    }
    
    else if (selectedPosition && validMoves.some(move => 
      move[0] === position[0] && move[1] === position[1]
    )) {
 
      const newBoard = [...board.map(row => [...row])];
      const [fromRow, fromCol] = selectedPosition;
      newBoard[position[0]][position[1]] = board[fromRow][fromCol];
      newBoard[fromRow][fromCol] = null;
      
      setBoard(newBoard);
      setSelectedPosition(null);
      setValidMoves([]);
      setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
    }
    
    else {
      setSelectedPosition(null);
      setValidMoves([]);
    }
  };

  return (
    <div className="game">
      <h2>Player: {currentPlayer === 'white' ? 'White' : 'Black'}</h2>
      <Board
        board={board}
        selectedPosition={selectedPosition}
        validMoves={validMoves}
        onSquareClick={handleSquareClick}
      />
    </div>
  );
};

export default Game;