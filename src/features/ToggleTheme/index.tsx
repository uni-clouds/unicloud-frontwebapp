import { useTheme } from '@mui/system'
import { FC } from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { UnstyledButton } from '../../components/Elements/Buttons/Unstyled'
import { useToggleTheme } from '../../hooks/useToggleTheme'

export const ToggleTheme: FC = () => {
  const { palette } = useTheme()
  const { toggleColorMode } = useToggleTheme()
  return (
    <UnstyledButton onclick={toggleColorMode}>
      {palette.mode === 'dark' ? (
        <HiOutlineMoon className='text-xl' />
      ) : (
        <HiOutlineSun className='text-xl' />
      )}
    </UnstyledButton>
  )
}
