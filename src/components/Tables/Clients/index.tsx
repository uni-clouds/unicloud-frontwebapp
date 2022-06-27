import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useTheme } from '@mui/system'
import { Title } from '../../Elements/TitleDashboard'
import { TableSkeleton } from '../TableSkeleton'
import { TableDataProps } from './types'
import { Skeleton } from '@mui/material'

export const ClientTable: React.FC<TableDataProps> = ({
  data,
  isLoading,
  isError
}) => {
  const { palette } = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const textColor = palette.mode === 'dark' ? 'inherit' : '#526484'

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper
      sx={{
        // maxWidth: '550px',
        width: '100%',
        overflow: 'hidden',
        boxShadow: 1,
        borderRadius: 2
      }}
    >
      <TableContainer
        sx={{ height: '500px' }}
        className='col-span-1 w-full scrollbar-thumb-brand-200 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin hover:scrollbar-thumb-base-200 dark:hover:scrollbar-thumb-zinc-600'
      >
        {isLoading || isError !== 'success' ? (
          <div className='p-6 flex flex-col gap-6 justify-between w-full'>
            <TableSkeleton />
          </div>
        ) : (
          <>
            <div className='p-4'>
              <Title text='Clientes' />
            </div>
            <Table stickyHeader aria-label='client list table' role='table'>
              <caption>Lista de clientes</caption>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      minWidth: 170,
                      color: 'inherit',
                      fontSize: 16,
                      borderBottomColor: '#d4c2ff',
                      borderBottomWidth: 2,
                      backgroundColor: 'inherit'
                    }}
                  >
                    Nome
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data?.map((client) => (
                  <TableRow role='table-row' tabIndex={-1} key={uuidv4()} hover>
                    <TableCell
                      sx={{
                        borderColor: '#d4c2ff',
                        color: textColor
                      }}
                    >
                      {client}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </TableContainer>
      {isLoading || isError !== 'success' ? (
        <Skeleton variant='text' animation='wave' />
      ) : (
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component='div'
          count={Number(data?.length)}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={'Linhas por página'}
          sx={{
            color: textColor
          }}
        />
      )}
    </Paper>
  )
}
