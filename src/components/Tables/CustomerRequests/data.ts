import { HeadCell, Data } from './types'
import i18n from '../../../i18n'

export function createData(
  request_by: string,
  name: string,
  email: string,
  created_at: string,
  expires_at: string,
  resources: string,
  status: string
): Data {
  return {
    name,
    email,
    request_by,
    created_at,
    expires_at,
    resources,
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
    id: 'resources',
    numeric: false,
    disablePadding: false,
    label: 'Recursos',
    minWidth: 100
  },
  {
    id: 'request_by',
    numeric: false,
    disablePadding: false,
    label: 'Requerido por',
    minWidth: 180
  },
  {
    id: 'created_at',
    numeric: false,
    disablePadding: false,
    label: 'Requerido em',
    minWidth: 80
  },
  {
    id: 'expires_at',
    numeric: false,
    disablePadding: false,
    label: 'Expira em',
    minWidth: 80
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
    minWidth: 80
  }
]
