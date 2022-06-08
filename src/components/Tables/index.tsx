import { useState } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

import { columns, rows } from './data'
import { styled } from '@mui/material/styles'
import { Title } from '../Elements/TitleDashboard'

export const ClientTable: React.FC = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

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
        width: '100%',
        overflow: 'hidden',
        boxShadow: 1,
        borderRadius: 2
      }}
    >
      <TableContainer
        sx={{ maxHeight: '500px' }}
        className='scrollbar-thumb-brand-200 scrollbar-track-transparent scrollbar-thin hover:scrollbar-thumb-base-200'
      >
        <div className='p-4'>
          <Title text='Clientes' />
        </div>
        <Table stickyHeader aria-label='client list table' role='table'>
          <caption>Lista de clientes</caption>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: '#8091a7',
                    borderBottomColor: '#d4c2ff',
                    borderBottomWidth: 2
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    role='table-row'
                    tabIndex={-1}
                    key={row.code}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#e7dcff'
                      }
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            borderColor: '#d4c2ff',
                            color: '#3c4d62'
                          }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          color: '#3c4d62'
        }}
      />
    </Paper>
  )
}
