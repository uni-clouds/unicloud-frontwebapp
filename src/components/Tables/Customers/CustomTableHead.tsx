import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  TableSortLabel
} from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import { headCells } from './data'
import { Data, TableProps } from './types'
import { colors } from '../../../styles/colors'
import { stylesCheckboxTable } from '../styles'
import { useTranslation } from 'react-i18next'
import { TableText } from '../TableText'

export function CustomTableHead(props: TableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  const { t: translate } = useTranslation()

  function translateLabel(label: string) {
    if (label === 'Empresa') return translate('company')
    if (label === 'CNPJ') return translate('cnpj')
    if (label === 'Telefone') return translate('phone')
    if (label === 'Cidade') return translate('city')
    if (label === 'Status') return translate('status')
  }

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            disabled
            inputProps={{
              'aria-label': 'select all users'
            }}
            sx={stylesCheckboxTable}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ minWidth: headCell.minWidth }}
            sx={{ color: colors.base[500] }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <TableText>{translateLabel(headCell.label)}</TableText>
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell width={10}></TableCell>
      </TableRow>
    </TableHead>
  )
}
