import type { CreatePiece } from "../../../dto/piece.dto"
import type { Coordinate } from "../../../dto/board.dto"
import type Cell from "../../board/cell"
import type { Toolkit } from "../../../dto/piece.dto"

export default abstract class Piece {
  public team: 'black' | 'white'
  public hasMoved: boolean = false

  constructor(payload: CreatePiece) {
    this.team = payload.team
    this.setupBind()
  }

  abstract getAvailableMoves(coordinate: Coordinate, toolkit: Toolkit): Cell[]

  private setupBind() {
    this.registerMove = this.registerMove.bind(this)
  }

  getName() {
    return this.constructor.name.toLowerCase()
  }

  getImageResource() {
    const imageName = `${this.team}-${this.getName()}.png`
    return new URL(`/src/assets/pieces/${imageName}`, import.meta.url).href
  }

  registerMove() {
    this.hasMoved = true
  }
}