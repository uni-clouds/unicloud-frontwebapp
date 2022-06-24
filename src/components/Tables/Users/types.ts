export interface UsersTableProps {
  list: UserDataType[]
}

export interface UserDataType {
  id: number
  username: string
  first_name: string
  last_name: string
  email: string
  is_active: boolean
  userprofile?: Userprofile
}

type Userprofile = {
  phone: string
  address: string
  city: string
  state: string
  country: string
}
export interface Data {
  name: string
  email: string
  phone: string | undefined
  country: string | undefined
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
