import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {

    return (
        <div className="about">
            <h2 className="about-title">About this Algorithm: </h2>
                <p className="about-conway">
                    Conway's Game of Life was first developed by a British mathematican, John Conway, in 1970. 
                        <br />
                    The game consists of being in either two states, alive(on) or dead(off). The patterns on the game evolve over time as the cells move across the grid, making this a "zero-player" game and Turing complete. There is a set of rules that the game follows, (which are listed next to the game). <br />
                    Those rules were chosen to satisfy the following criteria...
                    <div className="about-rules">
                        <h4 style={{ fontWeight:'600'}}>Birth:</h4>
                            - Every empty cell that is adjacent to exactly three live neighbors becomes a birth/live cell.<hr />
                        <h4 style={{ fontWeight:'600'}}>Death: </h4>
                            - Each cell with four or more neighbors will die. Also, each cell with only one neighbor or none, will die from isolation.<hr/>
                        <h4 style={{ fontWeight:'600'}}>Survival: </h4>
                            - Any live cell/counter with two or three live neighbors survives to move to the next generation.<hr/>
                        <h4 style={{ fontWeight:'600'}}>Side Note:</h4> 
                            - All other live cells die in the next generation. Similarly, all other dead cells stay dead.<hr/>
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


