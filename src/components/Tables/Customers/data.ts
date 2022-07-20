import { HeadCell, Data } from './types'
import i18n from '../../../i18n'

export function createData(
  name: string,
  cnpj: string,
  phone: string | undefined,
  email: string | undefined,
  city: string | undefined,
  status: string
): Data {
  return {
    name,
    cnpj,
    phone,
    email,
    city,
    status
  }
}

const translate = i18n.t

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Empresa',
    minWidth: 180
  },
  {
    id: 'cnpj',
    numeric: false,
    disablePadding: false,
    label: 'CNPJ',
    minWidth: 180
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Telefone',
    minWidth: 180
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: 'Cidade',
    minWidth: 100
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
    minWidth: 100
  }
]
