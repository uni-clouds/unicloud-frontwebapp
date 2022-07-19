import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { ReactNode } from 'react'

export interface HeaderProps {
  isOpen: boolean
  openDrawer: () => void
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

export interface NavbarProps {
  children: ReactNode
}
