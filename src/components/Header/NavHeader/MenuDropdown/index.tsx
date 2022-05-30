import { Link } from 'react-router-dom'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FiActivity } from 'react-icons/fi'
import {
  RiArrowDropDownLine,
  RiUserSettingsLine,
  RiLogoutBoxRLine
} from 'react-icons/ri'
import { useAuth } from '../../../../hooks/useAuth'
import { UnstyledButton } from '../../../Elements/Buttons/Unstyled'
import { Avatar } from '../../../Avatar'
import { Divider } from '../../../Elements/Divider'
import { DropdownProps } from './types'

export const MenuDropdown: React.FC<DropdownProps> = ({
  email,
  isSuperUser,
  username,
  firstName,
  lastName
}) => {
  const { logout } = useAuth()
  const superUser = isSuperUser ? 'Super Administrador' : 'Staff'

  return (
    <div className='dropdown dropdown-end'>
      <label
        tabIndex={0}
        className=' peer flex flex-row capitalize items-start btn min-w-max btn-ghost text-base text-brand-600 hover:bg-transparent hover:text-brand-700 transition-colors delay-75'
      >
        <div className='flex-col'>
          <p className='font-normal text-sm'>{superUser}</p>
          <span className='text-base-500 text-sm flex flex-row items-start'>
            {username}
            <RiArrowDropDownLine className='text-2xl ml-2 peer-hover:translate-y-px peer-hover:transition-transform peer-hover:ease-in-out peer-hover:delay-75' />
          </span>
        </div>
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu p-2 shadow bg-slate-50 w-60 mt-2 mr-2 border-t-2 border-brand-600 rounded-t-md'
      >
        <div className='px-2 flex flex-row gap-2 items-center'>
          <Avatar firstName={firstName} lastName={lastName} />
          <span className='text-xs'>{email}</span>
        </div>
        <Divider />
        <li className='hover:text-brand-600'>
          <Link to='#'>
            <HiOutlineUserCircle />
            <span>Perfil</span>
          </Link>
        </li>
        <li className='hover:text-brand-600'>
          <Link to='#'>
            <RiUserSettingsLine />
            <span>Preferências</span>
          </Link>
        </li>
        <li className='hover:text-brand-600'>
          <Link to='#'>
            <FiActivity />
            <span>Atividade</span>
          </Link>
        </li>
        <Divider />
        <li className='hover:text-brand-600'>
          <UnstyledButton onclick={() => logout()}>
            <RiLogoutBoxRLine />
            <span>Sair</span>
          </UnstyledButton>
        </li>
      </ul>
    </div>
  )
}
