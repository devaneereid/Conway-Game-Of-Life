import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {

    return (
        <div className="about">
            <h2 className="about-title">About this Algorithm: </h2>
                <p className="about-conway">
                    Conway's Game of Life was first developed by a British mathematican, John Conway, in 1970 as a way to explain unpredictable cellular automaton. 
                        <br />
                        <br />
                    The game consists of being in either two states, alive (on) or dead (off). The patterns of the game evolves over time as the cells move across the grid, making this a "zero-player" game. Meaning it's evolution is determined by the initial state and grows from there. 
                        <br />
                        <br />
                    <h4>How to Play</h4>
                    To play Game of Life, you simply select the desired cells and watch as they evolve and interact with their neighbor, or don't interact and in that case those cells die.

                    <h4>Turing Completeness</h4>
                    When it's Turing Complete, that means it has followed the rules in a sequence that have the same processing capability.
                    Turing Completeness is a system of data-manipulation rules(cellular automaton) and is said it can be used to simulate any Turing machine. 
                    This is showing that this system is able to recognize or decide other data-manipulation rule sets. <br /><br />
                    The Turing Machine will read from the current cell and find the available transition to continue evolving, then it changes to the new state.

                < hr/>
                   <h4>The four rules were chosen to satisfy the following criteria...</h4>
                    <div className="about-rules">
                        <h4 style={{ fontWeight:'600' }}>Birth:</h4>
                            - Every empty cell that is adjacent to exactly three live neighbors becomes a birth/live cell.
                        <h4 style={{ fontWeight:'600' }}>Death: </h4>
                            - Each cell with four or more neighbors will die. Also, each cell with only one neighbor or none, will die from isolation.
                        <h4 style={{ fontWeight:'600' }}>Survival: </h4>
                            - Any live cell/counter with two or three live neighbors survives to move to the next generation. All other live cells die in the next generation. Similarly, all other dead cells stay dead.<hr/>
                    </div>
                </p>
                <p className="about-conway">
                    This has been an interesting and fun project to dive into. I've learned a lot and have enjoyed exploring more into the algorithms and patterns.
                        < br />
                        < br />
                    Thank you for taking the time to check out my implemention of 
                        < br />
                    Conway's Game of Life! 
                        < br />
                        < br />
                </p>
            <div className="game-link">
                <NavLink to='/'>Back to Game</NavLink> 
            </div>
        </div>
    );
}


