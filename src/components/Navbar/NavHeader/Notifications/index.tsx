import { Divider, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UnstyledButton } from '../../../Elements/Buttons/Unstyled'
import { NotificationIcon } from '../../../Elements/NotificationIcon'

//! incluir map com notification content
export const Notifications = () => {
  const [haveNotifications, setHasNotifications] = useState(true)
  const navigate = useNavigate()

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
        className='btn w-10 btn-ghost hover:bg-transparent hover:text-brand-600 hover:rounded-full transition-colors delay-75 ease-in-out text-3xl '
      >
        <NotificationIcon isNotification={haveNotifications} />
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
        <MenuItem
          sx={{
            mt: '8px',
            '&:hover': { color: '#7500ff' }
          }}
        >
          <Link to='/policitys' className='flex flex-row gap-2'>
            <span>notificação 1</span>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            '&:hover': { color: '#7500ff' }
          }}
        >
          <Link to='#' className='flex flex-row gap-2'>
            <span>notificação 2</span>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            '&:hover': { color: '#7500ff' }
          }}
        >
          <Link to='#' className='flex flex-row gap-2'>
            <span>notificação 3</span>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => navigate('/notifications')}
          sx={{
            '&:hover': { color: '#7500ff' }
          }}
        >
          <span className='hover:text-brand-600 mx-auto'>Veja todas</span>
        </MenuItem>
      </Menu>
    </>
  )
}
