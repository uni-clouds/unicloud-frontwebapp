import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { VisibilityIconProps } from '../Forms/Login/types'

export const VisibilityIcon: React.FC<VisibilityIconProps> = ({
  isVisible
}) => {
  return (
    <button
      type='button'
      className='text-brand-600'
      role='icon-visibility'
      aria-label='Show password as plain text. Warning: this will display your password on the screen.'
    >
      {isVisible ? <BsEye /> : <BsEyeSlash />}
    </button>
  )
}
