import { useState } from 'react'
import { useInviteList } from '../../../hooks/useInviteList'
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
import { createData } from './data'
import { colors } from '../../../styles/colors'
import { TableSkeleton } from '../TableSkeleton'

export const InvitesTable: React.FC = () => {
  const { data, isLoading, isError } = useInviteList()
  const { palette } = useTheme()
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('created_at')
  const [selected, setSelected] = useState<readonly string[] | undefined>([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const colorRow = palette.mode === 'dark' ? '#27272A' : '#faf8fc'
  const colorHover = palette.mode === 'dark' ? 'inherit' : colors.brand[300]
  const colorBgChecked =
    palette.mode === 'dark' ? colors.scroll : colors.brand[300]

  const getId = data
    .filter((e) => e.email === selected.toString())
    .map((item) => item.id)

  const rows = data?.map((invite) =>
    createData(
      invite.email,
      new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }).format(new Date(invite.created_at)),
      invite.status
    )
  )
  console.log('🐫', rows)

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
      const newSelecteds = rows?.map((n) => n.email)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected?.indexOf(name)
    let newSelected: readonly string[] = []

    if (selected) {
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name)
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1))
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1))
      } else if (!!selectedIndex) {
        if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1)
          )
        }
      }
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

  const isSelected = (name: string) => selected?.indexOf(name) !== -1

  //* Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Number(rows?.length)) : 0

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {isLoading || isError ? (
        <TableSkeleton />
      ) : (
        <Paper sx={{ maxWidth: 1280, width: '100%', mb: 2, px: 2 }}>
          <TableToolbar numSelected={Number(selected?.length)} id={getId} />
          <TableContainer>
            <Table
              sx={{
                minWidth: 500,
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
              size='medium'
              component='table'
            >
              <CustomTableHead
                numSelected={Number(selected?.length)}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={Number(rows?.length)}
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
                          borderRadius: 2,
                          '& .Mui-checked': {
                            backgroundColor: colorBgChecked
                          }
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
                                backgroundColor: 'transparent',
                                ':hover': {
                                  backgroundColor: colorHover
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
                          {row.email}
                        </TableCell>
                        <TableCell
                          align='left'
                          sx={{
                            border: 'none',
                            width: 250
                          }}
                        >
                          {row.created_at}
                        </TableCell>
                        <TableCell
                          align='left'
                          sx={{
                            border: 'none',
                            width: 100,
                            borderRadius: 2,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            textTransform: 'capitalize',
                            color:
                              row.status === 'expired'
                                ? colors.brand.bitcoin
                                : colors.brand.ethereum
                          }}
                        >
                          {row.status === 'pending' ? 'Pendente' : 'Expirado'}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows
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
            count={Number(rows?.length)}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage='Linhas por página'
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  )
}
