import i18n from '../../../i18n'
import { HeadCell, Data } from './types'

export function createData(
  email: string,
  created_at: string,
  status: string
): Data {
  return { email, created_at, status }
}

const translate = i18n.t

export const headCells: readonly HeadCell[] = [
  {
    id: 'email',
    numeric: false,
    disablePadding: true,
    label: `${translate('email')}`,
    minWidth: 180
  },
  {
    id: 'created_at',
    numeric: false,
    disablePadding: false,
    label: `${translate('customersUsers:sentAt')}`,
    minWidth: 80
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: `${translate('status')}`,
    minWidth: 80
  }
]

export function transformDate(date: string) {
  new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    month: 'narrow',
    year: 'numeric'
  }).format(new Date(date))
}
