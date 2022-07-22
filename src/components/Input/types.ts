import { InputLabelProps } from '../InputLabel/types'
import { FormEvent } from 'react'
import { FieldError } from 'react-hook-form'

export interface InputProps extends InputLabelProps {
  placeholder?: string
  type?: string
  error?: FieldError
  disabled?: boolean
  showVisibilityIcon?: (event: FormEvent) => void
  isVisible?: boolean
  accept?: string
  role: string
}

export interface InputStylesProps {
  layout?: 'column' | 'row'
  borderColor?: string
  color?: string
  gap?: string
  error: boolean
}
