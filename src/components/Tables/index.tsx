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
import Skeleton from '@mui/material/Skeleton'
import { Title } from '../Elements/TitleDashboard'
import { TableDataProps } from './types'

export const ClientTable: React.FC<TableDataProps> = ({ data, isLoading }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  // const format = (value: number) =>
  //   new Intl.DateTimeFormat('pt-BR').format(value)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper
      sx={{
        maxWidth: '550px',
        width: '100%',
        overflow: 'hidden',
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <TableContainer
        sx={{ maxHeight: '500px' }}
        className='scrollbar-thumb-brand-200 scrollbar-track-transparent scrollbar-thin hover:scrollbar-thumb-base-200'
      >

        {isLoading ?
        <div className='p-6 flex flex-col gap-2'>
         <Skeleton variant='text' animation='wave' width={150}/>
          <Skeleton  animation='wave' variant='rectangular' height={200} width={500}/>
          <Skeleton  animation='wave' variant='rectangular' height={200} width={500}/>
          <Skeleton variant='text' animation='wave' width={100}/>
        </div>
        :
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
                  color: '#8091a7',
                  borderBottomColor: '#d4c2ff',
                  borderBottomWidth: 2,
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
                    color: '#3c4d62',
                  }}
                >
                  {client}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </>
        }
      </TableContainer>
     {isLoading ?
     <Skeleton variant='text' animation='wave'/>
    :  <TablePagination
    rowsPerPageOptions={[10, 25]}
    component='div'
    count={Number(data?.length)}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    sx={{
      color: '#3c4d62',
    }}
  />}
    </Paper>
  )
}
