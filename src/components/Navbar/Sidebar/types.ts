import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { ReactNode } from 'react'

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

export interface SidebarProps {
  isOpen: boolean
  closeDrawer: () => void
  children: ReactNode
}
