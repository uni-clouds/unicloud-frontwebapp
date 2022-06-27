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
import { Data, TableProps, HeadCell } from './types'
import { colors } from '../../../styles/colors'

export function CustomTableHead(props: TableProps) {
  const { order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all users'
            }}
            sx={{
              '&.Mui-checked': {
                color: colors.brand[600]
              },
              '&.MuiCheckbox-indeterminate': {
                color: colors.brand[600]
              }
            }}
          /> */}
        </TableCell>
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
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
