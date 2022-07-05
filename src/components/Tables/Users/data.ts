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

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: `${i18n.t('name')}`,
    minWidth: 180
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: `${i18n.t('email')}`,
    minWidth: 200
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: `${i18n.t('phone')}`,
    minWidth: 150
  },
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: `${i18n.t('country')}`,
    minWidth: 100
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: `${i18n.t('status')}`,
    minWidth: 100
  }
]
