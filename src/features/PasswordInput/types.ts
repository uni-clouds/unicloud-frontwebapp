import { Control, ControllerRenderProps, FieldError } from 'react-hook-form'
import { LoginFormProps } from '../../components/Forms/Login/types'

export interface PasswordInputProps {
  isError: boolean
  isVisible: boolean
  showVisibilityIcon: (event: React.FormEvent) => void
  name: 'password'
  control: Control<LoginFormProps, ''>
}

export interface VisibilityIconProps {
  isVisible?: boolean
  isError: boolean
}
