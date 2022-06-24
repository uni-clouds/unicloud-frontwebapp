import { HeadCell, Data } from './types'

export function createData(email: string, created_at: string): Data {
  return { email, created_at }
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'email',
    numeric: false,
    disablePadding: true,
    label: 'E-mail',
    minWidth: 180
  },
  {
    id: 'created_at',
    numeric: false,
    disablePadding: false,
    label: 'Enviado em',
    minWidth: 200
  }
]

export function transformDate(date: string) {
  new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    month: 'narrow',
    year: 'numeric'
  }).format(new Date(date))
}
