import './App.css';
import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const checkWinner = (squares) => {
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
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return true
      }
    }
    return null
  };
  const winner = checkWinner(board)
  const play = (index) => {
    if (board[index] === null) {
      const previousBoard = [...board];
      previousBoard[index] = xIsNext ? 'x' : 'o';
      setXIsNext(!xIsNext);
      setBoard(previousBoard);
      console.log(winner)
    } else {
      return;
    }
  };
  const reset = () => {
    
  }
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
      {/* {
        winner === true && <div className="message">Winner</div>
      } */}
      <div className='messageContainer'>
        <div className="message">
          Message
        </div>
        <div className="close" onClick={reset}>
          <AiOutlineClose/>
        </div>
      </div>
    </div>
  );
};

export default App;
