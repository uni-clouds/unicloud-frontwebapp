export interface TableProps {
  cells: TableCellList[]
  data: []
  modalCell?: boolean
}

export interface TableHeaderProps {
  cells: TableCellList[]
  modalCell: boolean
}

export interface THeadCellProps {
  cellName: string
}

export interface TableCellList {
  name: string
  dataKey: string
}
