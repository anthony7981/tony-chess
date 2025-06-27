import Cell from "./cell"
import {
  PIECES,
  PieceKind,
} from "../../utils/constants"
import type Piece from "../pieces/factory/piece"
import type { Coordinate, PieceCoordinate } from "../../dto/board.dto"
import PieceFactory from "../pieces/factory/pieceFactory"

export default class Board {
  public rows: Cell[][] = []
  public eliminatedPieces: { [key:string]: Piece[] } = { 'black': [], 'white': [] }
  private letterRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  private numberRows = [1, 2, 3, 4, 5, 6, 7, 8]
  private activeCell?: Cell
  private paintedCells: Cell[] = []

  constructor() {
    this.buildCells()
    this.populateCells()
    this.bindTools()
  }

  private buildCells() {
    let color: 'cornflowerblue' | 'white' = 'cornflowerblue'
    for (let columnIndex = 0; columnIndex < this.letterRows.length; columnIndex++) {
      const rowCells = []
      for (let rowIndex = 0; rowIndex < this.numberRows.length; rowIndex++) {
        const cell = new Cell({
          color,
          position_x: rowIndex,
          position_y: columnIndex,
          name: `${this.letterRows[columnIndex]}${this.numberRows[rowIndex]}`,
        })
        color = color == 'white' ? 'cornflowerblue' : 'white'
        rowCells.push(cell)
      }
      color = color == 'white' ? 'cornflowerblue' : 'white'
      this.rows.push(rowCells)
    }
  }

  private populateCells() {
    PIECES.forEach((pieceQ: PieceCoordinate) => {
      const cell = this.findCell({x: pieceQ.x, y: pieceQ.y})
      if (!cell) throw new Error(`Unexpected error populating cells with pieces`)
      const piece = PieceFactory.createPiece(pieceQ.name as keyof typeof PieceKind, pieceQ.color)
      cell.assignPiece(piece, true)
    })
  }

  private bindTools() {
    this.findCell = this.findCell.bind(this)
    this.movePiece = this.movePiece.bind(this)
    this.processClick = this.processClick.bind(this)
  }

  private clearPaintedCells() {
    this.activeCell?.setPainting(undefined)
    this.activeCell?.deactivate()
    this.paintedCells.forEach((cell) => {
      cell.isActive = false
      cell.setPainting(undefined)
    })
    this.paintedCells = []
  }

  private clearActiveCell() {
    this.activeCell!.setPainting(undefined)
    this.activeCell!.isActive = false
    this.activeCell = undefined
  }

  private movePiece(from: Coordinate, to: Coordinate) {
    const cell = this.findCell({x: from.x, y: from.y})!
    cell.setPainting(undefined)
    const pieceToMove = cell.piece!
    const destiny = this.findCell({x: to.x, y: to.y})!
    const eliminatedPiece = destiny.assignPiece(pieceToMove)
    if (eliminatedPiece) {
      this.eliminatedPieces[eliminatedPiece.team].push(eliminatedPiece)
    }
    this.clearPaintedCells()
  }

  activateCell(cell: Cell) {
    if (this.activeCell == cell) {
      return
    }

    const piece = cell.piece
    if (piece) {
      this.clearPaintedCells()
      cell.isActive = true
      cell.setPainting('green')
      const otherCells = piece.getAvailableMoves(
        cell.getCoordinates(), 
        { cellFinder: this.findCell }
      )
      otherCells.forEach(cell => cell.setPainting('lightgreen'))
      this.activeCell = cell
      this.paintedCells.push(...otherCells)
    }
  }

  processClick(coordinate: Coordinate) {
    const cell = this.findCell(coordinate)!
    const moveIsAvailable = !cell.isActive && this.paintedCells.includes(cell)
    if (!moveIsAvailable) {
      if (this.activeCell) {
        this.clearActiveCell()
      }
      this.activateCell(cell)
      return
    }

    const from = this.activeCell!.getCoordinates()
    this.movePiece(from, coordinate)
  }

  findCell(coordinate: Coordinate): Cell | undefined {
    const { x, y } = coordinate
    return this.rows[y]?.[x]
  }
}