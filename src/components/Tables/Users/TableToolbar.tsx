import { IconButton, Tooltip, Typography, Toolbar } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { MdFilterList } from 'react-icons/md'
import { RiListSettingsLine } from 'react-icons/ri'
import { TableToolbarProps } from './types'

export const TableToolbar = (props: TableToolbarProps) => {
  const { numSelected } = props
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.grey[100],
              theme.palette.action.activatedOpacity
            )
        })
      }}
    >
      {numSelected > 0 && (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} {numSelected === 1 ? 'selecionado' : 'selecionados'}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title='Editar'>
          <IconButton>
            <RiListSettingsLine />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filtrar'>
          <IconButton
            sx={{
              '& . MuiToolbar-root': {
                justifyContent: 'fex-end'
              }
            }}
          >
            <MdFilterList />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}
