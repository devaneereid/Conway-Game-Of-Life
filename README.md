# Conway's-Game-Of-Life 

### Computer Science - Unit 1 Build Week Project 
```
This application is an implementation of John Conway's, Game of Life.
```
## Built using: 
> - JavaScript
> - React.js

### Game of Life Rules: 

> 1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.

> 2. Any live cell with two or three live neighbors lives on to the next generation.

> 3. Any live cell with more than three live neighbors dies, as if by overpopulation.

> 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

### About the Algorithm: 

> - Conway's Game of Life was first developed by a British mathematican, John Conway, in 1970 as a way to explain unpredictable cellular automaton. 

> - The game consists of being in either two states, alive (on) or dead (off). The patterns on the game evolves over time and the cells move across the grid, making this a "zero-player" game and Turing complete.

> - To play Game of Life, you simply select the desired cells and watch as they evolve and interact with their neighbor, or don't interact and in that case those cells die.

> - Turing Completeness is a system of data-manipulation rules(cellular automaton) and is said and it can be used to simulate any Turing machine.

> - When it's Turing Complete, that means it has followed the rules in a sequence that have the same processing capability. This is showing that this system is able to recognize or decide other data-manipulation rule sets. The Turing Machine will read from the current cell and find the available transition to continue evolving, then it changes to the new state.

#### Birth: 
> - Every empty cell that is adjacent to exactly three live neighbors becomes a birth/live cell.

#### Death: 
> - Each cell with four or more neighbors will die. Also, each cell with only one neighbor or none, will die from isolation.

#### Survival: 
> - Any live cell/counter with two or three live neighbors survives to move to the next generation. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
```
```
##### WIKIPEDIA
```
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
```