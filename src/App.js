import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWInner = (squares) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  };
  const play = (index) => {
    if (board[index] === null) {
      const previousBoard = [...board];
      previousBoard[index] = xIsNext ? 'x' : 'o';
      setXIsNext(!xIsNext);
      setBoard(previousBoard);
      checkWInner(board)
    } else {
      return;
    }
  };

  return (
    <div className='App'>
      <div className={`board ${xIsNext ? 'x' : 'o'}`}>
        {board.map((square, index) => {
          return (
            <div
              className={`cell ${board[index]}`}
              key={index}
              onClick={() => play(index)}
            >
              {square}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
