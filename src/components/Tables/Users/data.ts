import { HeadCell, Data } from './types'
import i18n from '../../../i18n'

export function createData(
  name: string,
  email: string,
  phone: string | undefined,
  country: string | undefined,
  status: string,
  first_name: string,
  last_name: string
): Data {
  return {
    name,
    email,
    phone,
    country,
    status,
    first_name,
    last_name
  }
}

const translate = i18n.t

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: `Nome`,
    minWidth: 180
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: `E-mail`,
    minWidth: 200
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: `Telefone`,
    minWidth: 150
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: `País`,
    minWidth: 100
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: `Status`,
    minWidth: 100
  }
]
