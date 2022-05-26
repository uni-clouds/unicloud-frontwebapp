import { Link } from 'react-router-dom'
import {
  RiArrowDropDownLine,
  RiUserSettingsLine,
  RiLogoutBoxRLine
} from 'react-icons/ri'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FiActivity } from 'react-icons/fi'
import { useAuth } from '../../../../hooks/useAuth'
import { UnstyledButton } from '../../../Elements/Buttons/Unstyled'
import { Avatar } from '../../../Avatar'
import { parseCookies } from 'nookies'
import { Divider } from '../../../Elements/Divider'

export const MenuDropdown = () => {
  const { logout } = useAuth()
  const cookies = parseCookies()

  return (
    <div className='dropdown dropdown-end'>
      <label
        tabIndex={0}
        className=' flex flex-row btn min-w-max btn-ghost text-base text-brand-600 hover:bg-transparent hover:text-brand-700 transition-colors delay-75'
      >
        <span className='peer capitalize '>Partner</span>
        <RiArrowDropDownLine className='text-2xl ml-2 peer-hover:translate-y-px peer-hover:transition-transform peer-hover:ease-in-out peer-hover:delay-75' />
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu p-2 shadow bg-slate-50 w-60 mt-2 '
      >
        <div className='px-2 flex flex-row gap-2 items-center'>
          <Avatar />
          <span className='text-xs'>{cookies.user}</span>
        </div>
        <Divider />
        <li>
          <Link to='#'>
            <HiOutlineUserCircle />
            <span>Perfil</span>
          </Link>
        </li>
        <li>
          <Link to='#'>
            <RiUserSettingsLine />
            <span>Preferências</span>
          </Link>
        </li>
        <li>
          <Link to='#'>
            <FiActivity />
            <span>Atividade</span>
          </Link>
        </li>
        <Divider />
        <li>
          <UnstyledButton onclick={() => logout()}>
            <RiLogoutBoxRLine />
            <span>Sair</span>
          </UnstyledButton>
        </li>
      </ul>
    </div>
  )
}
