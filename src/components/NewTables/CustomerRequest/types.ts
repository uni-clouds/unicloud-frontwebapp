import { TableCellList } from '../types'

export interface RequestObject {
  id: number
  customer: string
  opportunity_name: string
  opportunity_description: string
  user: string
  request_date: string
  status: string
  resources: { resource_name: string; resource_id: number }[]
  history: { type: string; user: string; date: string }[]
}

export const requestTableCells: TableCellList[] = [
  { name: 'Customer', dataKey: 'customer' },
  { name: 'Requerido em', dataKey: 'request_date' },
  { name: 'Status', dataKey: 'status' }
]

export interface TBodyProps {
  data: RequestObject[]
  cells: TableCellList[]
  modalCell: boolean
}

export interface TRowProps {
  cells: TableCellList[]
  data: RequestObject
  modalCell: boolean
}

export interface RequestTableProps {
  data: RequestObject[]
  cells: TableCellList[]
  modalCell: boolean
}
