import type Piece from "../pieces/factory/piece"
import type { CreateCell } from "../../dto/cell.dto"
import type { Coordinate } from "../../dto/board.dto"

export default class Cell {
  public color: 'cornflowerblue' | 'white'
  public isActive: boolean = false
  public paintColor: 'green' | 'lightgreen' | undefined = undefined
  public name: string
  private position_x: number
  private position_y: number
  public piece?: Piece

  constructor(payload: CreateCell) {
    this.name = payload.name
    this.color = payload.color
    this.position_x = payload.position_x
    this.position_y = payload.position_y
    this.piece = undefined

    this.setupBinding()
  }

  private setupBinding() {
    this.setPainting = this.setPainting.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
  }

  assignPiece(piece: Piece, init?: boolean): Piece | undefined {
    if(!init){
      piece.registerMove()
    }
    const eliminatedPiece = this.piece
    this.piece = piece
    return eliminatedPiece
  }

  setPainting(color: 'green' | 'lightgreen' | undefined) {
    this.paintColor = color
  }

  deactivate() {
    this.piece = undefined
    this.isActive = false
  }

  getCoordinates(): Coordinate {
    return {
      x: this.position_x,
      y: this.position_y
    }
  }
}