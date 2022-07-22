import { ControllerRenderProps, FieldError } from 'react-hook-form'

export interface SelectInputProps extends ControllerRenderProps {
  error?: FieldError
  values: string[]
  name: string
  label: string
}
