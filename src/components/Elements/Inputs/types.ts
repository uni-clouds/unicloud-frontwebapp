import { FormEvent } from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form'

export interface InputProps {
  placeholder?: string
  label?: string
  type?: string
  error?: FieldError
  disabled?: boolean
  showVisibilityIcon?: (event: FormEvent) => void
  isVisible?: boolean
  accept?: string
}

export interface SelectInputProps extends ControllerRenderProps {
  error?: FieldError
  values: string[]
  name: string
  label: string
}
