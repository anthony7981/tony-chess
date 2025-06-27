export interface Coordinate {
  x: number
  y: number
}

export interface PieceCoordinate extends Coordinate {
  color: 'black' | 'white'
  name: string
}