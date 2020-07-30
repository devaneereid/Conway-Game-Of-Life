import React, { Component } from 'react';
import BoxLogic from './BoxLogic';

const BOX_SIZE = 20;
const WIDTH = 600;
const HEIGHT = 500;

class GameLogic extends Component {
    constructor() {
        super();
        this.rows = HEIGHT / BOX_SIZE;
        this.cols = WIDTH / BOX_SIZE;
        this.game = this.createEmptyGame();
    }

    state = { 
        myGame: [],
        alive: false,
        speed: 100,
        nextGeneration: 0,
    }

    // startGame will toggle on(dead) or off(alive)
    startGame = () => {
        this.setState({
            alive: true
        });
        this.runIteration();
    }

    // this will toggle on/off
    pauseGame = () => {
        this.setState({
            alive: false
        });
        if (this.timeOutHandler) {
            window.clearTimeout(this.timeOutHandler);
            this.timeOutHandler = null;
        }
    }

    // check directions/cells next to selected cell
    neighbors(game, x, y) {
        let myNeighbors = 0;
        const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < directions.length; i++) {
            const travel = directions[i];
            let y1 = y + travel[0];
            let x1 = x + travel[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && game[y1][x1]) {
                myNeighbors++;
            }
        }
        return myNeighbors;
    }
    runIteration() {
        console.log('running iteration');
        let newGame = this.createEmptyGame();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.neighbors(this.game, x, y);
                if (this.game[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newGame[y][x] = true;
                    } else {
                        newGame[y][x] = false;
                    }
                } else {
                    if (!this.game[y][x] && neighbors === 3) {
                        newGame[y][x] = true;
                    }
                }
            }
        }
        this.game = newGame;
        this.setState({ 
            myGame: this.fillCells(),
            nextGeneration: this.state.nextGeneration + 1 // this will update the next generation while the game is running
        });
        this.timeOutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.speed);
    }

    // can change and control the speed of the input 
    handleSpeed = e => {
        this.setState({
            speed: e.target.value
        });
    }

    // Creates an empty game
    createEmptyGame() {
        let game = [];
        for (let y = 0; y < this.rows; y++) {
            game[y] = [];

            for (let x = 0; x < this.cols; x++) {
                game[y][x] = false;
            }
        }
        return game;
    }

    // Creates Cells to fill out the board
    fillCells() {
        let myGame = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.game[y][x]){
                    myGame.push({ x, y });
                }
            }
        }
        return myGame; 
    } 
    
    // Element offSet - this will calculate the position of the board element
    getElementOffset() {
        const rect = this.gameRef.getBoundingClientRect();
        const doc = document.documentElement;

        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop
        };
    }
    // onClick to select boxes
    selectBox = e => {
        const elemOffset = this.getElementOffset();
        const offSetX = e.clientX - elemOffset.x;
        const offSetY = e.clientY - elemOffset.y;

        const x = Math.floor(offSetX / BOX_SIZE);
        const y = Math.floor(offSetY / BOX_SIZE);

        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows){
            this.game[y][x] = !this.game[y][x];
        }
        this.setState({
            myGame: this.fillCells()
        });
    }
    // Clears the game board and all data from the cells. 
    handleClear = () => {
        this.game = this.createEmptyGame();
        this.setState({
            myGame: this.fillCells(),
            nextGeneration: 0
        });
    }
    // Picks random cells across the board each time 
    randomGrid = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.game[y][x] = (Math.random() >= 0.5);
            }
        }
        this.setState({ 
            myGame: this.fillCells(),
            speed: 100
        });
    }
    // Selects less cells and speed set to a default of 50 msec/can be changed in the input
    defaultGridOne = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.game[y][x] = Math.floor(Math.random() >= 0.7);
            }
        }
        this.setState({ 
            myGame: this.fillCells(),
            speed: 50
        });
    }
    // Selects less cells and speed set to a default of 150 msec/can be changed in the input
    defaultGridTwo = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.game[y][x] = Math.floor(Math.random() >= 0.84);
            }
        }
        this.setState({ 
            myGame: this.fillCells(),
            speed: 150
        });
    }
    // Selects cells speed and sets to a default of 200 msec/can be changed in the input
    defaultGridThree = () => {
        let grid2 = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (Math.floor(Math.random() * 2 === 1)) {
                    grid2[y][x] = true;
                }
            }
        }
        this.setState({ 
            myGame: this.fillCells(),
            speed: 200
        });
    }

    render() {
        const { myGame, alive } = this.state;
        return(
            <div className="GameBoard" style={{ margin: '0 15px'}}>
                <div 
                    className="Board" 
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${BOX_SIZE}px ${BOX_SIZE}px`}} 
                    onClick={this.selectBox}
                    ref={(n) => {this.gameRef = n; }}>
                        {myGame.map(box => (
                            <BoxLogic
                                x={box.x} 
                                y={box.y} 
                                key={`${box.x},${box.y}`} />
                            ))}
                </div>
                    <h3>Generation Count: {this.state.nextGeneration}</h3>
                <div className="controls">
                    Update every: 
                    <input 
                        className="input"
                        value={this.state.speed} 
                        onChange={this.handleSpeed} 
                        placeholder="msec"
                        /> msec 
                    <div className="button-container"> {alive ? 
                        <button className="button" onClick={this.pauseGame}>Pause Game</button> : <button className="button" onClick={this.startGame}>Start Game</button>}
                        <button className="button" onClick={this.randomGrid}>Select Random</button>
                        <button className="button" onClick={this.defaultGridOne}>Default One</button>
                        <button className="button" onClick={this.defaultGridTwo}>Default Two</button>
                        <button className="button" onClick={this.handleClear}>Clear Game</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameLogic;