import { IconButton, Tooltip, Typography, Toolbar } from '@mui/material'
import { useState } from 'react'
import { CgDanger } from 'react-icons/cg'
import { MdFilterList } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
import { TableToolbarProps } from './types'
import { colors } from '../../../styles/colors'

import { ModalDetailsCustomer } from '../../../templates/CustomersList/ModalDetailsCustomer'
import { useCustomersList } from '../../../hooks/useCustomersList'
import { stylesToolbar } from '../styles'
import { useTranslation } from 'react-i18next'
import { Input } from '../../Input/Input'
import { SearchBar } from '../../Forms/SearchBar'

export const TableToolbar = (props: TableToolbarProps) => {
  return (
    <Toolbar sx={stylesToolbar}>
      <SearchBar />
    </Toolbar>
  )
}
