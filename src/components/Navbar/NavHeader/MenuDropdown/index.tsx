import { useState } from 'react'
import { Divider, Menu, MenuItem, useTheme } from '@mui/material'
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
import { colors } from '../../../../styles/colors'

export const MenuDropdown: React.FC<DropdownProps> = ({
  email,
  type,
  username,
  firstName,
  lastName
}) => {
  const { logout } = useAuth()
  const { palette } = useTheme()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const customHover =
    palette.mode === 'dark' ? colors.brand[500] : colors.brand[600]

  return (
    <>
      <button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        type='button'
        role='menu'
        className=' peer flex flex-row capitalize items-start min-w-max text-base text-brand-600  hover:text-brand-700 dark:text-brand-500 dark:hover:text-brand-600 transition-colors delay-75'
      >
        <div className='flex-col'>
          <p className='font-normal text-sm text-left'>{type}</p>
          <span className='text-base-500 dark:text-base-100 text-sm flex flex-row items-start'>
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
          'aria-labelledby': 'menu-item'
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
            '&:hover': { color: customHover }
          }}
        >
          <Link to='/user-profile' className='flex flex-row gap-2'>
            <HiOutlineUserCircle />
            <span className='text-sm'>Perfil</span>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            '&:hover': { color: customHover }
          }}
        >
          <Link to='#' className='flex flex-row gap-2'>
            <RiUserSettingsLine />
            <span className='text-sm'>Preferências</span>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            '&:hover': { color: customHover }
          }}
        >
          <Link to='#' className='flex flex-row gap-2'>
            <FiActivity />
            <span className='text-sm'>Atividade</span>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => logout()}
          sx={{
            '&:hover': { color: customHover }
          }}
        >
          <RiLogoutBoxRLine />
          <span className='ml-2  text-sm'>Sair</span>
        </MenuItem>
      </Menu>
    </>
  )
}
