import type { Coordinate } from "../../dto/board.dto";
import type { CreatePiece, Toolkit } from "../../dto/piece.dto";
import type Cell from "../board/cell";
import Piece from "./factory/piece";

export default class Bishop extends Piece {
  constructor(payload: CreatePiece) {
    super(payload)
  }

  getAvailableMoves(coordinate: Coordinate, toolkit: Toolkit): Cell[] {
    // const {x, y} = coordinate
    const patterns = [
      { x: 1, y: 1 },
      { x: 1, y: -1 },
      { x: -1, y: -1 },
      { x: -1, y: 1 }
    ]

    const cells: Cell[] = []
    for (const pattern of patterns) {
      let currentCoordinate = coordinate
      let nextCell: Cell | undefined
      while (!nextCell?.piece) {
        nextCell = toolkit.cellFinder({
          x: currentCoordinate.x + pattern.x,
          y: currentCoordinate.y + pattern.y
        })
        if (!nextCell) break
        const piece = nextCell.piece
        if (piece) {
          if (piece.team !== this.team) cells.push(nextCell)
            break
        }

        currentCoordinate = nextCell!.getCoordinates()
        cells.push(nextCell)
      }
    }
    return cells
  }
}