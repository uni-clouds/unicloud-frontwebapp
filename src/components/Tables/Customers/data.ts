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
    label: `${translate('company')}`,
    minWidth: 180
  },
  {
    id: 'cnpj',
    numeric: false,
    disablePadding: false,
    label: `${translate('cnpj')}`,
    minWidth: 200
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: `${translate('phone')}`,
    minWidth: 150
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: `${translate('city')}`,
    minWidth: 100
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: `${translate('status')}`,
    minWidth: 100
  }
]
