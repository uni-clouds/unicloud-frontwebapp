export interface RequestTableProps {
  list: RequestTableType[]
  isLoading?: boolean
  isError?: boolean
}
export interface RequestTableType {
  cnpj: string
  razao_social: string
  email: string
  request_by: string
  resources: string
  created_at: string
  expires_at: string
  is_pending: boolean
  id: string
}
export interface Data {
  name: string
  email: string
  request_by: string
  resources: string
  created_at: string
  expires_at: string
  status: string
}

export interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
  minWidth: number
}

export interface TableToolbarProps {
  numSelected: number
  id: number
}

export type Order = 'asc' | 'desc'

export interface TableProps {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

export interface SkeletonTableProps {
  width: number
}
