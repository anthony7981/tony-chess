import type { Coordinate } from "../../dto/board.dto";
import type { CreatePiece, Toolkit } from "../../dto/piece.dto";
import type Cell from "../board/cell";
import Piece from "./factory/piece";

export default class Pawn extends Piece {
  constructor(payload: CreatePiece) {
    super(payload)
  }

  getAvailableMoves(coordinate: Coordinate, toolkit: Toolkit): Cell[] {
    const {x, y} = coordinate
    const limit = this.hasMoved ? 1 : 2
    const cells: Cell[] = []
    for (let i = 0; i < limit; i++) {
      const direction = this.team !== 'white' ? 1 : (this.hasMoved ? -1 : -2)
      const cell = toolkit.cellFinder({x, y: y+i+direction})
      if (!cell || cell.piece) {
        break
      }
      cells.push(cell)
    }
    const enemies = this.findEnemies(coordinate, toolkit)
    return [...cells, ...enemies]
  }

  private findEnemies(coordinate: Coordinate, toolkit: Toolkit): Cell[] {
    const {x, y} = coordinate
    const patterns = [
      { x: -1, y: this.team !== 'white' ? 1 : -1 },
      { x: 1, y: this.team !== 'white' ? 1 : -1 }
    ]
    const cells: Cell[] = []
    for (const pattern of patterns) {
      const nextCell = toolkit.cellFinder({x: x + pattern.x, y: y + pattern.y })
      if (nextCell && nextCell?.piece && nextCell?.piece.team !== this.team) {
        cells.push(nextCell)
      }
    }
    return cells 
  }
}