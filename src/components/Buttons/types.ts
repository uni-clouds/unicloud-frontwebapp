import { ReactNode } from 'react'

export interface SubmitButtonProps {
  children: ReactNode
  isDisabled: boolean
}

export interface UnstyledButtonProps {
  children: ReactNode
  onclick: () => void
}
