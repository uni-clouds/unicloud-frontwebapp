export interface CustomersTableProps {
  list: CustomerTableType[]
  isLoading: boolean
  isError: boolean
}
export interface CustomerTableType {
  bairro: string
  cep: string
  cnpj: string
  telefone: string
  numero: string
  nome_fantasia: string
  razao_social: string
  logradouro: string
  municipio: string
  natureza_juridica: string
  estado: string
  pais: string
  email: string
  is_active: boolean
  id: number
  type: string
}
export interface Data {
  name: string
  cnpj: string
  phone: string | undefined
  city: string | undefined
  status: string
  email: string
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
