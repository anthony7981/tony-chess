import { useState } from "react";
import Board from "../../core/board/board"
import CellComponent from "../cell/cellComponent"
import type { Coordinate } from "../../dto/board.dto";

const GameComponent = () => {
  const [board, ] = useState(() => new Board())
  const [, setRender] = useState(0)

  const triggerRenderer = () => setRender(prev => prev + 1)

  const rows = board.rows

  const processClick = (coordinate: Coordinate) => {
    board.processClick(coordinate)
    triggerRenderer()
  }
  
  return (
    <>
      <div className="board-container">
        { rows.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {
              row.map((cell) => (
                <CellComponent 
                  key={cell.name} 
                  cellInstance={cell} 
                  toolkit={{
                    processClick: () => processClick(cell.getCoordinates()),
                  }}
                />
              ))
            }
          </div>
        ) )}
      </div>
    </>
  )
}

export default GameComponent