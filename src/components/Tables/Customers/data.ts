import { HeadCell, Data } from './types'

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
    minWidth: 200
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Telefone',
    minWidth: 150
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
