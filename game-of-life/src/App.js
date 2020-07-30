import React from 'react';
import './App.css';
import GameLogic from './Components/GameLogic.js';
import Rules from './Components/Rules.js';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from './Components/About.js';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="title">Conway's - Game of Life</h1> 
          <div style={{ display: 'flex' }}>
            <Route exact path='/' component={GameLogic} />
            <Route exact path='/' component={Rules} />
          </div>
          <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;

