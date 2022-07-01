import { useState } from 'react'
import { IconButton, Tooltip, Typography, Toolbar } from '@mui/material'
import { MdFilterList } from 'react-icons/md'
import { CgDanger } from 'react-icons/cg'
import { BsArrowCounterclockwise } from 'react-icons/bs'

import { TableToolbarProps } from './types'
import { api } from '../../../services/api'
import { ToastSuccess } from '../../Elements/ToastSuccess'
import { stylesToolbar } from '../styles'

export const TableToolbar = (props: TableToolbarProps) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const { numSelected, id } = props
  const selectedId = id.toString()

  async function updateInvitation(id: string) {
    try {
      const update = await api.patch('/update-invitation/', { id: id })
      if (update.data.status === 'sent') {
        setIsSuccess(true)
      }
      return update.data
    } catch (error: any) {
      console.error(error)
    }
  }
  const handleOnClose = (reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsSuccess(false)
  }
  return (
    <>
      {!!isSuccess && (
        <ToastSuccess
          message='Convite revalidado com sucesso!'
          isSuccess={isSuccess}
          handleClose={handleOnClose}
        />
      )}
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
          <Tooltip title='Revalidar'>
            <IconButton onClick={() => updateInvitation(selectedId)}>
              <BsArrowCounterclockwise />
            </IconButton>
          </Tooltip>
        ) : numSelected > 1 ? (
          <Tooltip
            title='Apenas um convite por vez'
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
      </Toolbar>
    </>
  )
}
