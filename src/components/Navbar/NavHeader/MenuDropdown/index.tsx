import { useState } from 'react'
import { Divider, Menu, MenuItem } from '@mui/material'
import {
  RiArrowDropDownLine,
  RiUserSettingsLine,
  RiLogoutBoxRLine
} from 'react-icons/ri'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FiActivity } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Avatar } from '../../../Avatar'

import { useAuth } from '../../../../hooks/useAuth'

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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        type='button'
        role='menu'
        className=' peer flex flex-row capitalize items-start btn min-w-max btn-ghost text-base text-brand-600 hover:bg-transparent hover:text-brand-700 transition-colors delay-75'
      >
        <div className='flex-col'>
          <p className='font-normal text-sm'>{superUser}</p>
          <span className='text-base-500 text-sm flex flex-row items-start'>
            {username}
            <RiArrowDropDownLine className='text-2xl ml-2 peer-hover:translate-y-px peer-hover:transition-transform peer-hover:ease-in-out peer-hover:delay-75' />
          </span>
        </div>
      </button>
      <Menu
        id='menu-dropdown'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu list'
        }}
      >
        <div className='px-2 flex flex-row gap-4 items-center py-2 mb-2'>
          <Avatar firstName={firstName} lastName={lastName} />
          <span className='text-xs'>{email}</span>
        </div>
        <Divider />
        <MenuItem
          sx={{
            mt: '8px',
            '&:hover': { color: '#7500ff' }
          }}
        >
          <Link to='/policitys' className='flex flex-row gap-2'>
            <HiOutlineUserCircle />
            <span>Perfil</span>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            '&:hover': { color: '#7500ff' }
          }}
        >
          <Link to='#' className='flex flex-row gap-2'>
            <RiUserSettingsLine />
            <span>Preferências</span>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            '&:hover': { color: '#7500ff' }
          }}
        >
          <Link to='#' className='flex flex-row gap-2'>
            <FiActivity />
            <span>Atividade</span>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => logout()}
          sx={{
            '&:hover': { color: '#7500ff' }
          }}
        >
          <RiLogoutBoxRLine />
          <span className='ml-2'>Sair</span>
        </MenuItem>
      </Menu>
    </>
  )
}