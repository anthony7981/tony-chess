import type { CreatePiece } from "../../dto/piece.dto";
import type { Coordinate } from "../../dto/board.dto";
import type { Toolkit } from "../../dto/piece.dto";
import type Cell from "../board/cell";
import Piece from "./factory/piece";

export default class Horse extends Piece {
  constructor(payload: CreatePiece) {
    super(payload)
  }

  getAvailableMoves(coordinate: Coordinate, toolkit: Toolkit): Cell[] {
    const {x, y} = coordinate

    const cells: Cell[] = []

    const patterns = [
      { x: [-2, 2], y: [-1, 1]}, 
      { x: [-1, 1], y: [-2, 2]}
    ]
    
    for (const pattern of patterns) {
      pattern.x.forEach(modifierX => {
        pattern.y.forEach(modifierY => {
          const cell = toolkit.cellFinder({x: x + modifierX, y: y + modifierY})
          if (cell && cell.piece?.team !== this.team) {
            cells.push(cell)
          }
        })
      })
    }
    
    return cells
  }
}