'use client';

import React, { useState } from 'react';

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index: number) {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function restartGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div style={{ display: 'flex', textAlign: 'center', marginTop: 50 }}>
      <h1>Tic Tac Toe</h1>
      <h2>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: 5, margin: '0 auto' }}>
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            style={{
              width: 100,
              height: 100,
              fontSize: 24,
              cursor: 'pointer',
              backgroundColor: '#2b2822',
              border: '1px solid #ccc'
            }}
          >
            {cell}
          </button>
        ))}
      </div>
      <button onClick={restartGame} style={{ display: 'block', marginTop: 20 }}>Restart</button>
    </div>
  );
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
