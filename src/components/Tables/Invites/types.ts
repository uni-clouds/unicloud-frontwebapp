export interface Data {
  created_at: string
  email: string
}

export interface HeadCell {
  id: keyof Data
  disablePadding: boolean
  label: string
  numeric: boolean //?
  minWidth: number
}

export interface TableToolbarProps {
  numSelected: number
  id: number[]
}

export type Order = 'asc' | 'desc'

export interface TableProps {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void
  order: Order
  orderBy: string
  rowCount: number
}
