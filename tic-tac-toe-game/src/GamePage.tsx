

import React, { useState } from "react";
import './GameStyles.css';
import ReLoadButton from "./icons/Reloadbutton.tsx";
import HomeButton from "./icons/Homebutton.tsx";
import XButton from "./icons/Xicon.tsx";
import OButton from "./icons/Oicon.tsx";
import Confetti from "react-confetti";
import XimgSymbol from "./icons/Ximg.tsx"
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";

export default function GamePage() {
  return (
    <main className="bg-space">
      <div>
        <Game />
      </div>
      <div className="circle"></div>
      <div className="square"></div>
      <div className="square-2"></div>
      <div className="triangle"></div>
      <div className="x-box"><XimgSymbol></XimgSymbol></div>

      <div className="square-3"></div>
      <div className="circle-2"></div>
      <div className="square-4"></div>
      <div className="triangle-2"></div>
      <div className="x-box-2"><XimgSymbol></XimgSymbol></div>
    </main>
  );
}

function Game() {
  type Cell = "X" | "O" | null;

  const navigate = useNavigate(); 

  const initialBoard: Cell[] = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  
  const { width, height } = useWindowSize();

  function handleClick(index: number) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X"; 
    setBoard(newBoard);
    setIsXNext(false);

    setTimeout(() => cpuMove(newBoard), 500);
  }

  function cpuMove(currentBoard: Cell[]) {
    if (calculateWinner(currentBoard)) return;
  
    const emptyIndices = currentBoard
      .map((cell, i) => (cell === null ? i : null))
      .filter((i): i is number => i !== null);
  
    if (emptyIndices.length === 0) return;
  
    const findWinningMove = (player: Cell) => {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
      ];
  
      for (let line of lines) {
        const [a, b, c] = line;
        const values = [currentBoard[a], currentBoard[b], currentBoard[c]];
        
        if (
          values.filter(v => v === player).length === 2 &&
          values.includes(null)
        ) {
          return line[values.indexOf(null)];
        }
      }
      return null;
    };
  
   
    let move = findWinningMove("O");
  
    if (move === null) {
      move = findWinningMove("X");
    }
  
    if (move === null) {
      move = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    }
  
    const newBoard = [...currentBoard];
    newBoard[move] = "O";
    setBoard(newBoard);
    setIsXNext(true);
  }

  function calculateWinner(cells: Cell[]): Cell {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6],        
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);

  return (
    <div className="board-space">
      {winner && <Confetti width={width} height={height} />}

      <div className="space-game-buttons">
      
        <button 
        className="game-button"
        onClick={() => navigate("/")} 
        >
        <HomeButton className="button-reload"></HomeButton>
        </button>

        {winner && (
        <button
          onClick={() => setBoard(initialBoard)}
          className="game-button"
        >
        <ReLoadButton className="button-reload"></ReLoadButton>
        </button>
      )}
      </div>

      <div className="grid-container">
        {board.map((cell, i) => (
          <button
          key={i}
          onClick={() => handleClick(i)}
          className="cell-of-grid"
          disabled={!!cell || !!winner}
        >
          {cell === "X" && <XButton className="x-button"/>}
          {cell === "O" && <OButton/>}
        </button>
        ))}

      </div>
      <div className="text-winner">
        {winner ? `Winner: ${winner}` : `Turn: ${isXNext ? "X" : "O"}`}
      </div>
    </div>
  );
}