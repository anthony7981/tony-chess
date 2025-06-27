import type Cell from "../../core/board/cell";
import type { OnClick } from "../../dto/cell.dto";

type CellProps = {
  cellInstance: Cell
  toolkit: OnClick
}

const CellComponent = ({ cellInstance, toolkit }: CellProps) => {
  const backgroundColor = cellInstance.paintColor ?? cellInstance.color

  return (
    <>
      <div 
        className="board-cell" 
        style={{ backgroundColor }}
        onClick={() => toolkit.processClick()}
      >
        { cellInstance.piece && (
          <div className="board-piece">
            <img src={cellInstance.piece.getImageResource()} alt="" />
          </div>
        )}
      </div>
    </>
  )
}

export default CellComponent