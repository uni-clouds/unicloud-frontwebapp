import { IconButton, Tooltip, Typography, Toolbar } from '@mui/material'
import { useState } from 'react'
import { CgDanger } from 'react-icons/cg'
import { MdFilterList } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
import { TableToolbarProps } from './types'
import { useUsersList } from '../../../hooks/useUsersList'
import { colors } from '../../../styles/colors'
import { ModalDetails } from '../../../Templates/UsersList/ModalDetails'
import { stylesToolbar } from '../styles'
import { useTranslation } from 'react-i18next'

export const TableToolbar = (props: TableToolbarProps) => {
  const { numSelected, id } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data } = useUsersList()
  const userSelected = data?.filter((f) => f.id === id)
  const { t } = useTranslation()

  return (
    <Toolbar sx={stylesToolbar}>
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

      {numSelected === 1 ? (
        <Tooltip title={t('tooltip-showDetails')}>
          <IconButton
            onClick={() => setIsModalOpen(!isModalOpen)}
            sx={{ '& :hover': { color: colors.brand[600] } }}
          >
            <BiDetail color={colors.brand[600]} />
          </IconButton>
        </Tooltip>
      ) : numSelected > 1 ? (
        <Tooltip
          title={t('tooltip-oneUserAtATime')}
          aria-disabled='true'
          role='alert'
          disableInteractive
        >
          <IconButton>
            <CgDanger />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title={t('filter')}>
          <IconButton>
            <MdFilterList />
          </IconButton>
        </Tooltip>
      )}
      <ModalDetails
        isOpen={!!isModalOpen}
        handleClose={() => setIsModalOpen(!isModalOpen)}
        data={userSelected}
      />
    </Toolbar>
  )
}
