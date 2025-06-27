import type Cell from "../core/board/cell"
import type { Coordinate } from "./board.dto"

export interface CreateCell {
  name: string
  color: 'cornflowerblue' | 'white'
  position_x: number
  position_y: number
}

export interface CellFinder {
  (q: Coordinate): Cell | undefined
}

export interface ProcessClick {
  (): void
}

export interface ForceRender {
  (): void
}

export interface OnClick {
  processClick: ProcessClick
}