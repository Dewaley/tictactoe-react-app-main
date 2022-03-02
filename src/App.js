import './App.css';
import React, {useState} from 'react'
import Board from './components/Board'

const App = () => {
  const [board,setBoard] = useState(Array(9).fill(null))
  return (
    <div className="App"><Board board = {board}/></div>
  )
}

export default App