import { ReactNode } from 'react'

export interface SubmitButtonProps {
  children: ReactNode
  isDisabled?: boolean
  isLogin?: boolean
  isForm?: boolean
  onclick?: () => void
}

export interface UnstyledButtonProps {
  children: ReactNode
  onclick: () => void
}

export interface OutlineButtonProps extends PurpleButtonProps {
  fullWidth?: boolean
}

export interface NavigateButtonProps {
  text: string
  onclick: () => void
}

export interface PurpleButtonProps extends UnstyledButtonProps {
  name: string
}
