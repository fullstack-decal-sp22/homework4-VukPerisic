import React, {useState } from "react";
import './styles/Board.css';
import Square from "./Square";
import { getByDisplayValue } from "@testing-library/react";

function Board() {

    const [currentSymbol, setSymbol] = useState("X");
    const [status, setStatus] = useState(['','','','','','','','','']);

    function renderSquare(i) {
        return <Square onClick = {() => handleClick(i)} symbol = {status[i]}/>;
    }

    function handleClick(i) {
        let new_status = status.slice();
        new_status[i] = currentSymbol;
        currentSymbol === "X" ? setSymbol("O") : setSymbol("X");
        setStatus(new_status);
    }

    function updateWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (status[a] && status[a] === status[b] && status[a] === status[c]) {
          return status[a];
        }
      }
      return null;
    }

    const winner = updateWinner();

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{winner ? "winner: " + winner : "Next: " + currentSymbol}</div>
        </div>
    )
  }


export default Board;