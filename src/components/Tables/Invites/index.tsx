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
import { useTheme } from '@mui/system'
import { CustomTableHead } from './CustomTableHead'
import { getComparator, stableSort } from './utils'
import { TableToolbar } from './TableToolbar'
import { Data, Order } from './types'
import { createData } from './data'
import { colors } from '../../../styles/colors'
import { TableSkeleton } from '../TableSkeleton'
import { useTranslation } from 'react-i18next'
import { addCountryToLanguage } from '../../LanguageSelector/util'
import { IconButton, Tooltip } from '@mui/material'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { api } from '../../../services/api'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { TableText } from '../TableText'

export const InvitesTable: React.FC = () => {
  const { data, isLoading, isError } = useInviteList()
  const { palette } = useTheme()
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Data>('created_at')
  const [selected, setSelected] = useState<readonly string[] | undefined>([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  //Invitation sending success
  const [isSuccess, setIsSuccess] = useState(false)
  const colorRow = palette.mode === 'dark' ? '#27272A' : '#faf8fc'
  const colorHover = palette.mode === 'dark' ? 'inherit' : colors.brand[300]
  const colorBgChecked =
    palette.mode === 'dark' ? colors.scroll : colors.brand[300]

  const { t: translate, i18n } = useTranslation()

  const getId = data
    .filter((e) => e.email === selected.toString())
    .map((item) => item.id)

  //INVITATION REVALIDATION FUNCTION
  async function updateInvitation(id: string) {
    try {
      const update = await api.patch('/update-invitation/', { id: id })
      if (update.data.status === 'sent') {
        setIsSuccess(true)
      }
      return update.data
    } catch (error: any) {
      console.error(error)
    }
  }
  //INVITATION TOASTY CLOSE
  const handleOnClose = (reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsSuccess(false)
  }

  // ROW DATA ARRAY CREATION
  const rows = data?.map((invite) =>
    createData(
      invite.email,
      new Intl.DateTimeFormat(addCountryToLanguage(i18n.resolvedLanguage), {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }).format(new Date(invite.created_at)),
      invite.status
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

  //SELECT A SINGLE ROW
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

  const isSelected = (name: string) => selected?.indexOf(name) !== -1

  //* Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Number(rows?.length)) : 0

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {isLoading || isError ? (
        <TableSkeleton width={750} />
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
              <caption className='sr-only'>Lista de convites</caption>
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
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='normal'
                          sx={{
                            border: 'none'
                          }}
                        >
                          <TableText>{row.email}</TableText>
                        </TableCell>
                        <TableCell
                          align='left'
                          sx={{
                            border: 'none',
                            width: 250
                          }}
                        >
                          <TableText>{row.created_at}</TableText>
                        </TableCell>
                        <TableCell
                          align='left'
                          sx={{
                            border: 'none',
                            width: 100,
                            textTransform: 'capitalize',
                            color:
                              row.status === 'expired'
                                ? colors.brand.bitcoin
                                : colors.brand.ethereum
                          }}
                        >
                          {row.status === 'pending' ? (
                            <TableText>{translate('pending')}</TableText>
                          ) : (
                            <TableText>{translate('expired')}</TableText>
                          )}
                        </TableCell>
                        <TableCell
                          className='text-base-400'
                          align='center'
                          sx={{
                            borderRadius: 2,
                            borderTopLeftRadius: 1,
                            borderBottomLeftRadius: 1,
                            border: 'none'
                          }}
                        >
                          <Tooltip title={translate('revalidate')}>
                            <IconButton
                              onClick={() => updateInvitation(`${getId[0]}`)}
                              sx={{ '& :hover': { color: colors.brand[600] } }}
                              className={` ${
                                isItemSelected ? '' : 'opacity-10'
                              } `}
                            >
                              <BsArrowCounterclockwise
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
            labelRowsPerPage={translate('linesPerPage')}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      {!!isSuccess && (
        <ToastSuccess
          message={translate('customersUsers:invitationSent')}
          isSuccess={isSuccess}
          handleClose={handleOnClose}
        />
      )}
    </Box>
  )
}
