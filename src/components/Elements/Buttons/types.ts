import { ReactNode } from 'react'

export interface SubmitButtonProps {
  children: ReactNode
  isDisabled: boolean
}

export interface UnstyledButtonProps {
  children: ReactNode
  onclick: () => void
}

export interface NavigateButtonProps {
  text: string
  onclick: () => void
}

export interface PurpleButtonProps extends UnstyledButtonProps {
  name: string
}
