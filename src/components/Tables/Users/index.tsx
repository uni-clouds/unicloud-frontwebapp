import { useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/system'
import { CustomTableHead } from './CustomTableHead'
import { getComparator, stableSort } from './utils'
import { TableToolbar } from './TableToolbar'
import { Avatar } from '../../Avatar'
import { Data, Order, UsersTableProps } from './types'
import { colors } from '../../../styles/colors'
import { createData } from './data'
import {
  stylesCellUsers,
  stylesLastCellUsers,
  stylesTableUsers
} from '../styles'
import { useTranslation } from 'react-i18next'
import { IconButton, Tooltip } from '@mui/material'
import { BiDetail } from 'react-icons/bi'
import { ModalDetails } from '../../../templates/UsersList/ModalDetails'
import { TableText } from '../TableText'

export const UsersTable: React.FC<UsersTableProps> = ({ list, isLoading }) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('name')
  const [selected, setSelected] = useState<readonly string[]>([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const theme = useTheme()
  const colorRow = theme.palette.mode === 'dark' ? '#27272A' : '#faf8fc'
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    let newSelected: string[] = []

    if (newSelected.length === 0) {
      newSelected.push(name)
    } else {
      newSelected.splice(0, newSelected.length)
      newSelected.push(name)
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
  const userSelected = list?.filter((f) => f.id === getId[0])

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
                          <TableText>{row.email}</TableText>
                        </TableCell>
                        <TableCell align='left' sx={stylesCellUsers}>
                          <TableText>{row.phone}</TableText>
                        </TableCell>
                        <TableCell align='left' sx={stylesCellUsers}>
                          <TableText>{row.country}</TableText>
                        </TableCell>
                        <TableCell
                          align='left'
                          sx={{
                            border: 'none',
                            color:
                              row.status === 'Ativo'
                                ? colors.teal.custom
                                : colors.red.custom
                          }}
                        >
                          {row.status === 'Ativo' ? (
                            <TableText>{translate('active')}</TableText>
                          ) : (
                            <TableText>{translate('inactive')}</TableText>
                          )}
                        </TableCell>
                        <TableCell
                          className='text-base-400'
                          align='center'
                          sx={{
                            borderRadius: 2,
                            borderTopLeftRadius: 1,
                            borderBottomLeftRadius: 1,
                            border: 'none',
                            stylesLastCellUsers
                          }}
                        >
                          <Tooltip title={translate('tooltip-showDetails')}>
                            <IconButton
                              onClick={() => setIsModalOpen(!isModalOpen)}
                              sx={{ '& :hover': { color: colors.brand[600] } }}
                              className={` ${
                                isItemSelected ? '' : 'opacity-10'
                              } `}
                            >
                              <BiDetail
                                color={
                                  isItemSelected
                                    ? colors.brand[600]
                                    : colors.brand[500]
                                }
                                opacity={!isItemSelected ? 70 : 100}
                                className={`text-xl  `}
                              />
                            </IconButton>
                          </Tooltip>
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
      <ModalDetails
        isOpen={!!isModalOpen}
        handleClose={() => setIsModalOpen(!isModalOpen)}
        data={userSelected}
      />
    </Box>
  )
}
