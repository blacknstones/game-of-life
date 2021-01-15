import React, { useState } from "react";
import styled from "styled-components";
import produce from "immer";
import preset from "./preset.json";
// import Sketch from "react-p5";

const rowsLength = 40;
const colsLength = 20;

const Cell = styled.div`
  width: calc(90vw / 40);
  height: calc(90vw / 40);
  background: ${(props) => (props.isAlive ? "white" : "black")};
  border: 1px solid transparent;
`;

const makeEmptyGrid = (): number[][] => {
  let emptyGrid = [];
  for (let x = 0; x < rowsLength; x++) {
    emptyGrid[x] = [];
    for (let y = 0; y < colsLength; y++) {
      emptyGrid[x][y] = 0;
    }
  }
  return emptyGrid;
};

const App: React.FC = () => {
  const [grid, setGrid] = useState(
    preset
    //   () => {
    //   return makeEmptyGrid();
    // }
  );

  const [isRunning, setIsRunning] = useState(false);

  // use immer to nutate cell and update grid state
  const handleCellClick = (x: number, y: number) => {
    let newGrid = produce(grid, (draftGrid) => {
      draftGrid[x][y] = grid[x][y] ? 0 : 1;
    });
    setGrid(newGrid);
    console.log("clicked");
    console.table(JSON.stringify(grid));
  };

  return (
    <div className="App">
      <div className="game">
        <div className="grid-wrapper">
          {grid.map((rows, x) => {
            return (
              <div className="cols-wrapper">
                {rows.map((cols, y) => (
                  <Cell
                    className="cell"
                    key={`${x}, ${y}`}
                    onClick={() => {
                      handleCellClick(x, y);
                    }}
                    isAlive={grid[x][y] ? true : false}
                  />
                ))}
              </div>
            );
          })}
        </div>

        <div className="menu">

          <button className="menu-button">
            <i className="far fa-circle"></i>
          </button>

          <div className="toggle">
            <p className="intro">Game of Life</p>
            <div className="actions">
              <button>Run</button>
              <button>Reset</button>
              <button>Random</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
