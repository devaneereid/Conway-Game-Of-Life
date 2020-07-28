import React from 'react';
import './App.css';
import Game from './Components/Game.js';
import Rules from './Components/Rules.js';

function App() {
  return (
    <div className="App" >
      <h1>Game of Life!</h1> 
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Game />
          <Rules />
        </div>
    </div>
  );
}

export default App;
