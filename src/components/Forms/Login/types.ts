import { FormEvent } from 'react'
import { FieldError } from 'react-hook-form'
export interface LoginFormProps {
  email: string
  password: string
}

export interface LoginInputProps {
  placeholder: string
  label: string
  type: string
  error?: FieldError
  showVisibilityIcon?: (event: FormEvent) => void
  isVisible?: boolean
}

export interface VisibilityIconProps {
  isVisible?: boolean
  isError: boolean
}
