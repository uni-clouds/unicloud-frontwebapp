import { UnstyledButtonProps } from './types'

export const UnstyledButton: React.FC<UnstyledButtonProps> = ({
  children,
  onclick
}) => {
  return (
    <button type='button' className='p-2' onClick={onclick}>
      {children}
    </button>
  )
}
