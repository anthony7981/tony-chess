import type { PieceCoordinate } from "../dto/board.dto"

export const PieceKind = {
  PAWN: 'PAWN',
  TOWER: 'TOWER',
  HORSE: 'HORSE',
  BISHOP: 'BISHOP',
  QUEEN: 'QUEEN',
  KING: 'KING'
}

export const PIECES = [
  //WHITE PIECES
  { name: 'TOWER', color: 'white', x: 0, y: 7 },
  { name: 'TOWER', color: 'white', x: 7, y: 7 },
  { name: 'HORSE', color: 'white', x: 1, y: 7 },
  { name: 'HORSE', color: 'white', x: 6, y: 7 },
  { name: 'BISHOP', color: 'white', x: 2, y: 7 },
  { name: 'BISHOP', color: 'white', x: 5, y: 7 },
  { name: 'QUEEN', color: 'white', x: 3, y: 7 },
  { name: 'KING', color: 'white', x: 4, y: 7 },
  { name: 'PAWN', color: 'white', x: 0, y: 6 },
  { name: 'PAWN', color: 'white', x: 1, y: 6 },
  { name: 'PAWN', color: 'white', x: 2, y: 6 },
  { name: 'PAWN', color: 'white', x: 3, y: 6 },
  { name: 'PAWN', color: 'white', x: 4, y: 6 },
  { name: 'PAWN', color: 'white', x: 5, y: 6 },
  { name: 'PAWN', color: 'white', x: 6, y: 6 },
  { name: 'PAWN', color: 'white', x: 7, y: 6 },
  
  //BLACK PIECES
  { name: 'TOWER', color: 'black', x: 0, y: 0 },
  { name: 'TOWER', color: 'black', x: 7, y: 0 },
  { name: 'HORSE', color: 'black', x: 1, y: 0 },
  { name: 'HORSE', color: 'black', x: 6, y: 0 },
  { name: 'BISHOP', color: 'black', x: 2, y: 0 },
  { name: 'BISHOP', color: 'black', x: 5, y: 0 },
  { name: 'QUEEN', color: 'black', x: 3, y: 0 },
  { name: 'KING', color: 'black', x: 4, y: 0 },
  { name: 'PAWN', color: 'black', x: 0, y: 1 },
  { name: 'PAWN', color: 'black', x: 1, y: 1 },
  { name: 'PAWN', color: 'black', x: 2, y: 1 },
  { name: 'PAWN', color: 'black', x: 3, y: 1 },
  { name: 'PAWN', color: 'black', x: 4, y: 1 },
  { name: 'PAWN', color: 'black', x: 5, y: 1 },
  { name: 'PAWN', color: 'black', x: 6, y: 1 },
  { name: 'PAWN', color: 'black', x: 7, y: 1 },
] as PieceCoordinate[]

