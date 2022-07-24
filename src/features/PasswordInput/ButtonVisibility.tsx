import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { VisibilityIconProps } from './types'
import * as Styled from './styles'

export const ButtonVisibility: React.FC<VisibilityIconProps> = ({
  isVisible,
  isError = false
}) => {
  return (
    <Styled.Button
      type='button'
      role='icon'
      error={isError}
      aria-label='Show password as plain text. Warning: this will display your password on the screen.'
    >
      {isVisible ? <BsEye /> : <BsEyeSlash />}
    </Styled.Button>
  )
}
