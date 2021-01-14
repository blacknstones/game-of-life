import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";
// import Sketch from "react-p5";

const rowsLength = 40;
const colsLength = 20;

const Cell = styled.div`
  width: calc(90vw / 40);
  height: calc(90vw / 40);
  background: ${(props) => (props.isAlive ? "white" : "black")};
  border: 1px solid grey;
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
  const [grid, setGrid] = useState(() => {
    return makeEmptyGrid();
  });

  useEffect(() => {}, [grid]);

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
      <div className="rows-wrapper">
        {grid.map((rows, x) => {
          return (
            <div className="cols-wrapper">
              {rows.map((cols, y) => (
                <Cell
                  key={`${x}, ${y}`}
                  onClick={() => {
                    let newGrid = grid;
                    newGrid[x][y] = grid[x][y] ? 0 : 1;
                    setGrid(newGrid);
                    console.log("clicked");
                  }}
                  isAlive={grid[x][y] ? true : false}
                />
              ))}
            </div>
          );
        })}

      </div>

      {/* {grid.map((rows, x) => {
        return (
          <div
            key={`${x}`}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {rows.map((cols, y) => (
              <Cell
                key={`${y}`}
                onClick={() => {
                  let newGrid = grid;
                  newGrid[x][y] = grid[x][y] ? 0 : 1;
                  setGrid(newGrid);
                  console.log("clicked");
                }}
                alive={grid[x][y] ? true : false}
              />
            ))}
          </div>
        );
      })} */}
    </div>
  );
};

export default App;
