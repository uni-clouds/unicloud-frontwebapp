import { FieldError } from 'react-hook-form'

export interface SelectInputProps {
  options: Array<{
    name: string | number
    value: string | number
  }>
  placeholder?: string
  label?: string
  error?: FieldError
  disabled?: boolean
}
