import { FormEvent } from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form'
import { CreateCustomerType } from '../../Forms/CreateCustomer/types'

export interface InputProps {
  placeholder?: string
  label?: string
  type?: string
  error?: FieldError
  disabled?: boolean
  showVisibilityIcon?: (event: FormEvent) => void
  isVisible?: boolean
}

export interface SelectInputProps extends ControllerRenderProps {
  error?: FieldError
  // field?: ControllerRenderProps<CreateCustomerType, 'type'>
  values: string[]
  name: string
}
