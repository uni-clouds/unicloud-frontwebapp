import { Toolbar } from '@mui/material'
import { useState } from 'react'
import { TableToolbarProps } from './types'
import { useUsersList } from '../../../hooks/useUsersList'
import { stylesToolbar } from '../styles'
import { useTranslation } from 'react-i18next'
import { SearchBar } from '../../Forms/SearchBar'

export const TableToolbar = (props: TableToolbarProps) => {
  // const { numSelected, id } = props
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const { data } = useUsersList()
  // const userSelected = data?.filter((f) => f.id === id)
  // const { t: translate } = useTranslation()

  return (
    <Toolbar sx={stylesToolbar}>
      <div className='xs:w-full md:w-1/2'>
        <SearchBar />
      </div>

      {/* {numSelected > 0 && (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected}{' '}
          {numSelected === 1
            ? translate('selected-singular')
            : translate('selected-plural')}
        </Typography>
      )}

      {numSelected === 1 ? (
        <Tooltip title={translate('tooltip-showDetails')}>
          <IconButton
            onClick={() => setIsModalOpen(!isModalOpen)}
            sx={{ '& :hover': { color: colors.brand[600] } }}
          >
            <BiDetail color={colors.brand[600]} />
          </IconButton>
        </Tooltip>
      ) : numSelected > 1 ? (
        <Tooltip
          title={translate('tooltip-oneUserAtATime')}
          aria-disabled='true'
          role='alert'
          disableInteractive
        >
          <IconButton>
            <CgDanger />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title={translate('filter')}>
          <IconButton>
            <MdFilterList />
          </IconButton>
        </Tooltip>
      )}
      <ModalDetails
        isOpen={!!isModalOpen}
        handleClose={() => setIsModalOpen(!isModalOpen)}
        data={userSelected}
      /> */}
    </Toolbar>
  )
}
