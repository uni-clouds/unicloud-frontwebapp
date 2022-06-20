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

export interface MenuDataProp {
  menu: Array<DataProp>
}
type DataProp = {
  heading: string
  icon: string
  link: string
  text: string
}

export interface OrganizationLogoProps {
  logo?: string
}
