import { PieceKind } from "../../../utils/constants"
import Tower from "../tower";
import Horse from "../horse";
import Bishop from "../bishop";
import Pawn from "../pawn";
import Queen from "../queen";
import King from "../king";

export default class PieceFactory {
  private static pieceMap = {
    [PieceKind.TOWER]: Tower,
    [PieceKind.HORSE]: Horse,
    [PieceKind.BISHOP]: Bishop,
    [PieceKind.QUEEN]: Queen,
    [PieceKind.KING]: King,
    [PieceKind.PAWN]: Pawn,
  }

  static createPiece(pieceKind: keyof typeof PieceKind, color: 'black' | 'white') {
    const PieceClass = this.pieceMap[pieceKind]
    if (!PieceClass) throw new Error(`Unknown piece kind: ${pieceKind}`)
    return new PieceClass({ team: color })
  }
}