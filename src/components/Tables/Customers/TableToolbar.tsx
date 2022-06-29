import { IconButton, Tooltip, Typography, Toolbar } from '@mui/material'
import { useState } from 'react'
import { CgDanger } from 'react-icons/cg'
import { MdFilterList } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
import { TableToolbarProps } from './types'
import { colors } from '../../../styles/colors'

import { ModalDetailsCustomer } from '../../../Templates/CustomersList/ModalDetailsCustomer'
import { useCustomersList } from '../../../hooks/useCustomersList'

export const TableToolbar = (props: TableToolbarProps) => {
  const { numSelected, id } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data } = useCustomersList()
  const userSelected = data?.filter((f) => f.id === id)

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        justifyContent: 'flex-end'
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

      {numSelected === 1 ? (
        <Tooltip title='Exibir detalhes'>
          <IconButton
            onClick={() => setIsModalOpen(!isModalOpen)}
            sx={{ '& :hover': { color: colors.brand[600] } }}
          >
            <BiDetail color={colors.brand[600]} />
          </IconButton>
        </Tooltip>
      ) : numSelected > 1 ? (
        <Tooltip
          title='Apenas um usuário por vez'
          aria-disabled='true'
          role='alert'
          disableInteractive
        >
          <IconButton>
            <CgDanger />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filtrar'>
          <IconButton>
            <MdFilterList />
          </IconButton>
        </Tooltip>
      )}
      <ModalDetailsCustomer
        isOpen={!!isModalOpen}
        handleClose={() => setIsModalOpen(!isModalOpen)}
        data={userSelected}
      />
    </Toolbar>
  )
}
