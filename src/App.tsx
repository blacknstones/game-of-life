import React, { useState } from 'react';
import Sketch from "react-p5";

const rowsLength = 100;
const colsLength = 100;

const App: React.FC = () => {
  const [grid, setGrid] = useState();
  const board = [];
  for (let i = 0; i < rowsLength; i++) {
    board[i] = [];
    for (let j = 0; j < colsLength; j++) {
      board[i][j] = false;
    }
  }

  let setup = (p5, canvasParentRef) => {
    let canvas = p5.createCanvas(1000, 800).parent(canvasParentRef);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = (p5.windowHeight - p5.Height) / 2;
    canvas.position(x, y);
  }

  let draw = (p5) => {
    p5.background("rgb(0, 0, 0)");
    p5.stroke(255);
  }


  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default App;
