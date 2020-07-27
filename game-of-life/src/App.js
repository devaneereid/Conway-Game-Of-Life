import React from 'react';
import './App.css';
import Game from './Components/Game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Life!</h1>
          <p>By: Devanee Reid</p>
          <Game />
      </header>
    </div>
  );
}

export default App;
