import React, { useState } from "react";
import styled from "styled-components";
// import Sketch from "react-p5";

const rowsLength = 8;
const colsLength = 10;

const Cell = styled.div`
  width: calc(100vw / 10);
  height: calc(100vw / 10);
  background: ${(props) => (props.alive ? "white" : "black")};
  border: 1px solid white;
`;

const makeEmptyGrid = (): number[][] => {
  const emptyGrid = [];
  for (let x = 0; x < rowsLength; x++) {
    emptyGrid[x] = [];
    for (let y = 0; y < colsLength; y++) {
      emptyGrid[x][y] = 0;
    }
  }
  return emptyGrid;
};

// const createCells = () => {
//   let cells = [];
//   for (let i = 0; i < rowsLength; i++) {
//     for (let j = 0; j < colsLength; j++) {

//     }
//   }

// }

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [grid, setGrid] = useState(() => {
    return makeEmptyGrid();
  });

  // let setup = (p5, canvasParentRef) => {
  //   let canvas = p5.createCanvas(1000, 800).parent(canvasParentRef);
  //   let x = (p5.windowWidth - p5.width) / 2;
  //   let y = (p5.windowHeight - p5.Height) / 2;
  //   canvas.position(x, y);
  // }

  // let draw = (p5) => {
  //   p5.background("rgb(0, 0, 0)");
  //   p5.stroke(255);
  // }

  // <Sketch setup={setup} draw={draw} />

  return (
    <div className="App">
      {grid.map((rows, x) => {
        return (
          <div style={{display: "flex", flexDirection: "row"}}>
            {rows.map((cols, y) => (
              <Cell key={`${x}${y}`} alive={grid[x][y] ? true : false} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default App;
