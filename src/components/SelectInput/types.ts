import { FieldError } from 'react-hook-form'

export interface SelectInputProps {
  options: string[]
  placeholder?: string
  label?: string
  error?: FieldError
  disabled?: boolean
}
