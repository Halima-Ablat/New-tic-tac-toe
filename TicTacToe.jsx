import React from "react";

function TicTacToe() {
  return (
    <div className="tic-tac-toe">
      <div className="boxes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>Next player is X</h3>
      <p></p>
      <button>Reset</button>
    </div>
  );
}

export default TicTacToe;
