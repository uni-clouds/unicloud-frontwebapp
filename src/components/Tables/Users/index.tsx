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
import { Avatar } from '../../Avatar'
import { Data, Order, UsersTableProps } from './types'
import { colors } from '../../../styles/colors'
import { createData } from './data'
import {
  checkboxCellUsers,
  stylesCellUsers,
  stylesLastCellUsers,
  stylesTableUsers
} from '../styles'
import { useTranslation } from 'react-i18next'

export const UsersTable: React.FC<UsersTableProps> = ({ list, isLoading }) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('name')
  const [selected, setSelected] = useState<readonly string[]>([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const theme = useTheme()
  const colorRow = theme.palette.mode === 'dark' ? '#27272A' : '#faf8fc'

  const { t: translate } = useTranslation()

  const users = list?.map((user) => {
    return {
      name:
        [user.first_name, user.last_name].join(' ') === undefined || null
          ? ' - '
          : [user.first_name, user.last_name].join(' '),
      email: user.email === undefined || null ? ' - ' : user.email,
      phone:
        user.userprofile?.phone === undefined || null
          ? ' - '
          : user.userprofile?.phone,
      country:
        user.userprofile?.country === undefined || null
          ? ' - '
          : user.userprofile?.country,
      status: user.is_active ? 'Ativo' : 'Inativo',
      first_name: user.first_name === undefined || null ? ' ' : user.first_name,
      last_name: user.last_name === undefined || null ? ' ' : user.last_name
    }
  })
  const rows = users?.map((d) =>
    createData(
      d.name,
      d.email,
      d.phone,
      d.country,
      d.status,
      d.first_name,
      d.last_name
    )
  )

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
      const newSelecteds = rows?.map((n) => n.name)
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

  const getId = list
    ?.filter((e) => e.email === selected.toString())
    .map((item) => item.id)

  return (
    <Box sx={{ width: '100%' }}>
      {!!users && (
        <Paper sx={{ width: '100%', mb: 2, px: 2 }}>
          <TableToolbar numSelected={selected.length} id={Number(getId)} />
          <TableContainer>
            <Table
              sx={stylesTableUsers}
              aria-labelledby='tableTitle'
              size={dense ? 'small' : 'medium'}
              component='table'
            >
              <caption className='sr-only'>Lista de usuários</caption>
              <CustomTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows?.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.email)
                    const labelId = `user-list-table-${index}`
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.email)}
                        role='checkbox'
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.email}
                        selected={isItemSelected}
                        className='shadow-md'
                        sx={{
                          border: 'none',
                          backgroundColor: colorRow,
                          borderRadius: 2
                        }}
                      >
                        <TableCell padding='checkbox' sx={stylesLastCellUsers}>
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                              'aria-label': labelId
                            }}
                            sx={checkboxCellUsers}
                          />
                        </TableCell>
                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='normal'
                          sx={stylesCellUsers}
                        >
                          <div className='flex flex-row gap-3 items-center'>
                            <Avatar
                              firstName={row.first_name}
                              lastName={row.last_name}
                            />
                            <span>{row.name}</span>
                          </div>
                        </TableCell>
                        <TableCell align='left' sx={stylesCellUsers}>
                          {row.email}
                        </TableCell>
                        <TableCell align='left' sx={stylesCellUsers}>
                          {row.phone}
                        </TableCell>
                        <TableCell align='left' sx={stylesCellUsers}>
                          {row.country}
                        </TableCell>
                        <TableCell
                          align='left'
                          sx={{
                            borderRadius: 2,
                            borderTopLeftRadius: 1,
                            borderBottomLeftRadius: 1,
                            border: 'none',
                            color:
                              row.status === 'Ativo'
                                ? colors.teal.custom
                                : colors.red.custom
                          }}
                        >
                          {row.status === 'Ativo'
                            ? translate('active')
                            : translate('inactive')}
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
            labelRowsPerPage={translate('linesPerPage')}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  )
}
