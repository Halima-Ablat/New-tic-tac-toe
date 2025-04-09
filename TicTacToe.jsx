import React, { useEffect, useState } from "react";

function TicTacToe() {

  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("")

  function handleClick(getCurrentSquares){
    let cpySquares = [...squares];
    if(cpySquares[getCurrentSquares] || winnerPattern(squares)) return;
    cpySquares[getCurrentSquares] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function handleReset(){
    setSquares(Array(9).fill(''));
    setIsXTurn(true)
  }

  useEffect(() => {
   if(!winnerPattern(squares) && squares.every(item => item !== "")){
    setStatus(`This is a draw ! Please restart the game`)
   }else if(winnerPattern(squares)){
     setStatus(`Winner is ${winnerPattern(squares)}`)
   }else{
    setStatus(`Next player is ${isXTurn ? "X" : "O"}`)
   }
  }, [squares, isXTurn])

  function winnerPattern(squares){
     const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for(let i=0; i<winningPattern.length; i++){
      const [x,y,z] = winningPattern[i]
      if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
        return squares[x]
      }
    }
    return null
  }

  return (
    <div className="tic-tac-toe">
      <div className="box">
        <div onClick={() => handleClick(0)}>{squares[0]}</div>
        <div onClick={() => handleClick(1)}>{squares[1]}</div>
        <div onClick={() => handleClick(2)}>{squares[2]}</div>
        <div onClick={() => handleClick(3)}>{squares[3]}</div>
        <div onClick={() => handleClick(4)}>{squares[4]}</div>
        <div onClick={() => handleClick(5)}>{squares[5]}</div>
        <div onClick={() => handleClick(6)}>{squares[6]}</div>
        <div onClick={() => handleClick(7)}>{squares[7]}</div>
        <div onClick={() => handleClick(8)}>{squares[8]}</div>
      </div>
      <h3>{status}</h3>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default TicTacToe;
