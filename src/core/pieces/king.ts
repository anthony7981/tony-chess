import type { Coordinate } from "../../dto/board.dto";
import type { CreatePiece, Toolkit } from "../../dto/piece.dto";
import type Cell from "../board/cell";
import Piece from "./factory/piece";

export default class King extends Piece {
  constructor(payload: CreatePiece) {
    super(payload)
  }

  getAvailableMoves(coordinate: Coordinate, toolkit: Toolkit): Cell[] {
    console.log({coordinate, toolkit})
    return []
  }
}