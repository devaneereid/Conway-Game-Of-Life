import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {

    return (
        <div className="about">
            <h2 className="about-title">About this Algorithm: </h2>
                <p className="about-conway">
                    Conway's Game of Life was first developed by a British mathematican, John Conway, in 1970. 
                        <br />
                    The game consists of being in either two states, alive(on) or dead(off). The patterns on the game evolve over time and the cells move across the grid, making this a "zero-player" game and Turing complete. There is a set of rules the game follows, which are listed next to the game. Those rules were chosen to satisfy the following criteria...
                    <div className="about-rules">
                        < br />
                        - Any live cell with two or three live neighbors survives.
                        < br /> < br />
                        - Any dead cell with three live neighbors becomes a live cell.
                        < br /> < br /> 
                        - All other live cells die in the next generation. Similarly, all other dead cells stay dead.
                    </div>
                </p>
                <p className="about-conway">
                    This has been a fun and interesting project to dive into and explore more into the algorithms and patterns. 
                        <br />
                     Hope you enjoyed playing.
                        < br />
                        < br />
                    Thank you for taking the time to check out my implemention of 
                        < br />
                    Conway's Game of Life!
                </p>
            <div className="game-link">
                <NavLink to='/'>Back to Game</NavLink> 
            </div>
        </div>
    );
}


