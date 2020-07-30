import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Rules() {

    return(
        <div className="rules-container" style={{ textAlign: 'center'}}>
            <div className="inner">
                <h1 className="rules-title">Rules: </h1>
                    <div className="rules" >
                        1. Any live cell with fewer than two live neighbors dies, as if by underpopulation. 
                            <br />
                        2. Any live cell with two or three live neighbors lives on to the next generation.
                            <br />
                        3. Any live cell with more than three live neighbors dies, as if by overpopulation.
                            <br />
                        4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                    </div>
                <div className="about-link">
                    <NavLink to='/about'>Click here to read more!</NavLink>
                </div>
            </div>
        </div>
    );
}