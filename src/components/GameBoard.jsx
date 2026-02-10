import { useState } from "react";

const initialGameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// initialGameBoard.notMatch()

export default function GameBoard() {

  const [gameBoard,setGameBoard] = useState(initialGameBoard)

  function handleSelectSquare(){
    setGameBoard(()=>{

    })
  }

  return (
    <ol id="game-board">
      {initialGameBoard.map(function (row, rowIndex) {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return <li key={colIndex}><button>{playerSymbol}</button></li>;
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
