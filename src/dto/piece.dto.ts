import type { Coordinate } from "./board.dto"
import type Cell from "../core/board/cell"

export interface CreatePiece {
  team: 'black' | 'white'
}

export interface Toolkit {
  cellFinder: (q: Coordinate) => Cell | undefined,
}