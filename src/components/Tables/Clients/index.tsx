import { useMemo, useState } from 'react'
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
import { colors } from '../../../styles/colors'

export const ClientTable: React.FC<TableDataProps> = ({
  data,
  isLoading,
  isError
}) => {
  const { palette } = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const textColor = palette.mode === 'dark' ? 'inherit' : '#526484'
  const [isData, setIsData] = useState<string[] | undefined>()
  const [loading, setLoading] = useState<boolean>()
  const [error, setError] = useState(null)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }
  useMemo(() => {
    setIsData(data)
    setLoading(isLoading)
    setError(isError)
  }, [data])

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div className='h-35rem'>
      <Paper
        sx={{
          //maxWidth: '550px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: 1,
          borderRadius: 2
        }}
      >
        <div className='px-4 py-3 '>
          <Title text='Clientes' />
        </div>
        <TableContainer
          sx={{ minHeight: 415, minWidth: 350 }}
          className=' col-span-1 w-full h-full max-h-[400px] scrollbar-thumb-brand-200 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin hover:scrollbar-thumb-base-200 dark:hover:scrollbar-thumb-zinc-600'
        >
          {isLoading || isError !== 'success' ? (
            <div className='p-6 flex flex-col gap-6 justify-between items-center w-full'>
              <TableSkeleton width={450} />
            </div>
          ) : (
            <>
              <Table
                aria-label='client list table'
                role='table'
                sx={{
                  borderCollapse: 'separate !important',
                  borderSpacing: '0px 8px !important',
                  minWidth: 500
                }}
              >
                <caption className='sr-only'>Lista de clientes</caption>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        minWidth: 170,
                        color:
                          palette.mode === 'dark'
                            ? colors.base[100]
                            : colors.base[700],
                        fontSize: 16,
                        paddingBottom: 0,
                        borderBottomColor: 'transparent'
                      }}
                    >
                      Nome
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {isData?.map((client) => (
                    <TableRow
                      role='table-row'
                      tabIndex={-1}
                      key={uuidv4()}
                      hover
                    >
                      <TableCell
                        className='shadow-md'
                        sx={{
                          color: textColor,
                          textTransform: 'capitalize'
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
        {loading || error !== 'success' ? (
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
    </div>
  )
}
