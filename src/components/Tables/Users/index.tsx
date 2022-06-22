import { useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import { useTheme } from '@mui/system'
import { CustomTableHead } from './CustomTableHead'
import { getComparator, stableSort } from './utils'
import { TableToolbar } from './TableToolbar'
import { Data, Order } from './types'
import { rows } from './data'
import { colors } from '../../../styles/colors'

export const UsersTable: React.FC = () => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('name')
  const [selected, setSelected] = useState<readonly string[]>([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const theme = useTheme()
  const colorRow = theme.palette.mode === 'dark' ? '#27272A' : '#faf8fc'

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  //* Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, px: 2 }}>
        <TableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              borderCollapse: 'separate !important',
              borderSpacing: '0px 16px !important',
              '& .Mui-selected': {
                backgroundColor: 'lavender',
                ':hover': {
                  backgroundColor: 'lavender'
                }
              }
            }}
            aria-labelledby='tableTitle'
            size={dense ? 'small' : 'medium'}
            component='table'
          >
            <CustomTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name)
                  const labelId = `user-list-table-${index}`
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      className='shadow-md'
                      sx={{
                        border: 'none',
                        backgroundColor: colorRow,
                        borderRadius: 2
                      }}
                    >
                      <TableCell
                        padding='checkbox'
                        sx={{
                          border: 'none',
                          borderRadius: 2,
                          borderTopRightRadius: 1,
                          borderBottomRightRadius: 1
                        }}
                      >
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                            'aria-label': labelId
                          }}
                          sx={{
                            color: 'secondary',
                            '&.Mui-checked': {
                              color: colors.brand[600],
                              ':hover': {
                                backgroundColor: 'lavender'
                              }
                            }
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component='th'
                        id={labelId}
                        scope='row'
                        padding='normal'
                        sx={{
                          border: 'none'
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align='left' sx={{ border: 'none' }}>
                        {row.username}
                      </TableCell>
                      <TableCell align='left' sx={{ border: 'none' }}>
                        {row.phone}
                      </TableCell>
                      <TableCell align='left' sx={{ border: 'none' }}>
                        {row.createdAt}
                      </TableCell>
                      <TableCell
                        align='left'
                        sx={{
                          borderRadius: 2,
                          borderTopLeftRadius: 1,
                          borderBottomLeftRadius: 1,
                          border: 'none'
                        }}
                      >
                        {row.status}
                      </TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage='Linhas por página'
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}
