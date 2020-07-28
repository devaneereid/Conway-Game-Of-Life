import React from 'react';

export default function Rules() {
    
    return(
        <div className="rules-container" style={{ width: '35%'}}>
            <h1>Rules: </h1>
            <ol className="rules" style={{textAlign: 'initial'}}>
                <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
                <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                <li> Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                <li> Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
            </ol>
        </div>
    )
};