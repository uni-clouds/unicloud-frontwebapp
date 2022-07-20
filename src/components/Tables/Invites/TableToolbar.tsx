import { Toolbar } from '@mui/material'
import { TableToolbarProps } from './types'
import { stylesToolbar } from '../styles'
import { SearchBar } from '../../Forms/SearchBar'

export const TableToolbar = (props: TableToolbarProps) => {
  return (
    <>
      <Toolbar sx={stylesToolbar}>
        <SearchBar />
      </Toolbar>
    </>
  )
}
