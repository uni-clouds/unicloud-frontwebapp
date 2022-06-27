import { FormEvent } from 'react'
import { FieldError } from 'react-hook-form'

export interface InputProps {
  placeholder?: string
  label?: string
  type?: string
  error?: FieldError
  disabled?: boolean
  showVisibilityIcon?: (event: FormEvent) => void
  isVisible?: boolean
}
