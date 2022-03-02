import React from 'react'
import Square from './Square'

const Board = ({board}) => {
  return (
   <div className='board'>
    {board.map((square,index) => <Square key={index} value={square}/>)}
   </div>
  )
}

export default Board