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
import {
  stylesContainerClients,
  stylesPaperClients,
  stylesTableClients
} from '../styles'
import { useTranslation } from 'react-i18next'
import { DashboardTableSkeleton } from '../../Skeletons/DashboardTableSkeleton'
import { PaginationSkeleton } from '../../Skeletons/PaginationSkeleton'

export const ClientTable: React.FC<TableDataProps> = ({
  data,
  isLoading,
  isError
}) => {
  const { palette } = useTheme()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [isData, setIsData] = useState<string[] | undefined>()
  const [loading, setLoading] = useState<boolean>()
  const [error, setError] = useState(null)
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }
  const textColor = palette.mode === 'dark' ? 'inherit' : '#526484'
  useMemo(() => {
    setIsData(data)
    setLoading(isLoading)
    setError(isError)
  }, [data])

  const { t: translate } = useTranslation()

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div className='h-35rem shadow rounded-md'>
      <Paper sx={stylesPaperClients}>
        <div className='px-4 mt-4'>
          <Title text={translate('customers')} />
        </div>
        <TableContainer
          sx={stylesContainerClients}
          className=' col-span-1 w-full h-full max-h-[400px] scrollbar-thumb-brand-200 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin hover:scrollbar-thumb-base-200 dark:hover:scrollbar-thumb-zinc-600'
        >
          {isLoading || isError !== 'success' ? (
            <div className='p-6 flex flex-col gap-6 justify-between items-center w-full'>
              <DashboardTableSkeleton />
            </div>
          ) : (
            <>
              <Table
                aria-label='client list table'
                role='table'
                sx={stylesTableClients}
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
                      {translate('name')}
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
                        className='shadow-md capitalize rounded-md dark:shadow-zinc-800'
                        sx={{ color: textColor, borderBottom: 0 }}
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
          <PaginationSkeleton />
        ) : (
          <TablePagination
            rowsPerPageOptions={[10, 25]}
            component='div'
            count={Number(data?.length)}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={`${translate('linesPerPage')}`}
            sx={{
              color: textColor
            }}
          />
        )}
      </Paper>
    </div>
  )
}
