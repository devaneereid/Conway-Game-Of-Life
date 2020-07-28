import React from 'react';
import Cell from './Cell';

const CELL_SIZE = 20;
const WIDTH = 500;
const HEIGHT = 500;

class Game extends React.Component {
    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeEmptyBoard();
    }
    state = { 
        cells: [],
        interval: 100,
        isRunning: false,
    }
    runGame = () => {
        this.setState({
            isRunning: true
        });
        this.runIteration();
    }
    stopGame = () => {
        this.setState({
            isRunning: false
        });
    }
    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];
            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }
        return neighbors;
    }
    runIteration() {
        console.log('running iteration');
        let newBoard = this.makeEmptyBoard();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                    else {
                        newBoard[y][x] = false;
                    }
                }
                else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }
        this.board = newBoard;
        this.setState({ cells: this.makeCells() });
        this.timeOutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.interval);
    }
    handleIntervalChange = (e) => {
        this.setState({
            interval: e.target.value
        });
    }
    // Create an Empty Board
    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board;
    }
    // Create Cells 
    makeCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]){
                    cells.push({ x, y });
                }
            }
        }
        return cells; 
    } 
    // Element offSet - it will calculate the position of the board element
    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;
        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop
        };
    }
    // onClick
    handleClick = (e) => {
        const elemOffset = this.getElementOffset();
        const offSetX = e.clientX - elemOffset.x;
        const offSetY = e.clientY = elemOffset.y;
        const x = Math.floor(offSetX / CELL_SIZE);
        const y = Math.floor(offSetY / CELL_SIZE);
        if ( x >= 0 && x <= this.cols && y >= 0 && y <= this.rows){
            this.board[y][x] = !this.board[y][x];
        }
        this.setState({
            cells: this.makeCells()
        });
    }
    // Clears the board
    handleClear = () => {
        this.board = this.makeEmptyBoard();
        this.setState({
            cells: this.makeCells()
        });
    }
    // Picks random
    handleRandom = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 0.5);
            }
        }
        this.setState({ 
            cells: this.makeCells() 
        });
    }
   

    render() {
        const { cells, isRunning } = this.state;
        return(
            <div className="GameBoard">
                <h3>Generation: {this.generation}</h3>
                <div 
                    className="Board" 
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}} 
                    onClick={this.handleClick}
                    ref={(n) => {this.boardRef = n; }}>
                        {cells.map(cell => (
                            <Cell
                                x={cell.x} 
                                y={cell.y} 
                                key={`${cell.x}, ${cell.y}`} />
                        ))}
                </div>
                <div className="controls">
                    Update every 
                    <input value={this.state.interval} 
                        onChange={this.handleIntervalChange} placeholder="msec"/> 
                        msec {isRunning ? 
                        <button className="button" onClick={this.stopGame}>Stop Game</button> : 
                        <button className="button" onClick={this.runGame}> Play Game </button>}
                        <button className="button" onClick={this.handleRandom}>Select Random</button>
                        <button className="button" onClick={this.handleClear}>Clear Grid</button>
                </div>
            </div>
        );
    }
}

export default Game;