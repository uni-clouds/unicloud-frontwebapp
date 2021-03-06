import { useEffect, useState } from 'react'
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
import { CustomersTableProps, Data, Order } from './types'
import { colors } from '../../../styles/colors'
import { createData } from './data'
import { stylesCellUsers, stylesLastCellUsers } from '../styles'
import { useTranslation } from 'react-i18next'
import { BiDetail } from 'react-icons/bi'
import { IconButton, Tooltip } from '@mui/material'
import { ModalDetailsCustomer } from '../../../templates/CustomersList/ModalDetailsCustomer'
import { TableText } from '../TableText'

export const CustomersTable: React.FC<CustomersTableProps> = ({ list }) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('name')
  const [selected, setSelected] = useState<readonly string[]>([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const theme = useTheme()
  const colorRow = theme.palette.mode === 'dark' ? '#27272A' : '#faf8fc'
  const [customers, setCustomers] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { t: translate } = useTranslation()

  useEffect(() => {
    const handleCustomers = list?.map((customer) => {
      return {
        name:
          customer.razao_social === undefined || null
            ? ' - '
            : customer.razao_social,
        email: customer.email === undefined || null ? ' - ' : customer.email,
        phone:
          customer?.telefone === undefined || null ? ' - ' : customer?.telefone,
        city:
          customer?.municipio === undefined || null
            ? ' - '
            : customer.municipio,
        status: customer.is_active ? 'Ativo' : 'Inativo',
        cnpj: customer.cnpj === undefined || null ? ' - ' : customer.cnpj
      }
    })
    setCustomers(handleCustomers)
  }, [list])

  const rows = customers?.map((d) =>
    createData(d.name, d.cnpj, d.phone, d.email, d.city, d.status)
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
    const newSelected: string[] = []

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

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const getId = list
    ?.filter((e) => e.email === selected.toString())
    .map((item) => item.id)

  const customerSelected = list?.filter((f) => f.id === getId[0])

  return (
    <Box sx={{ width: '100%' }}>
      {!!customers && (
        <Paper sx={{ width: '100%', mb: 2, px: 2 }}>
          <TableToolbar numSelected={selected.length} id={Number(getId)} />
          <TableContainer>
            <Table
              sx={{
                minWidth: 750,
                borderCollapse: 'separate !important',
                borderSpacing: '0px 16px !important'
              }}
              aria-labelledby='tableTitle'
              size={dense ? 'small' : 'medium'}
              component='table'
            >
              <caption className='sr-only'>Lista de clientes</caption>
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
                        className='shadow-md cursor-pointer'
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
                          <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-xs md:text-sm'>
                              {row.name}
                            </span>
                            <span className='text-xs text-base-400'>
                              {row.email}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align='left' sx={stylesCellUsers}>
                          <TableText>{row.cnpj}</TableText>
                        </TableCell>
                        <TableCell align='left' sx={stylesCellUsers}>
                          <TableText>{row.phone}</TableText>
                        </TableCell>
                        <TableCell align='left' sx={stylesCellUsers}>
                          <TableText>{row.city}</TableText>
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
                                className={`text-xl transition-all `}
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
      <ModalDetailsCustomer
        isOpen={!!isModalOpen}
        handleClose={() => setIsModalOpen(!isModalOpen)}
        data={customerSelected}
      />
    </Box>
  )
}
