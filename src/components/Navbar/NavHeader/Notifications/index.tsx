import { Box, Divider, IconButton, Menu } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NotificationIcon } from '../../../Elements/NotificationIcon'
import { NotificationsContent } from '../../../NotificationsContent'
import { mockData } from '../../../NotificationsContent/data'

export const Notifications = () => {
  const [hasNotifications, setHasNotifications] = useState(false)
  const navigate = useNavigate()

  const fakeQuantity = mockData.length
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
      <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        type='button'
        role='menu'
        className='btn w-10 h-10 btn-ghost hover:bg-transparent hover:text-brand-600 hover:rounded-full transition-colors delay-75 ease-in-out text-3xl '
      >
        <NotificationIcon quantity={fakeQuantity} />
      </IconButton>
      <Menu
        id='menu-dropdown'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu list'
        }}
      >
        <Box
          onClick={() => navigate('/notifications')}
          sx={{
            display: 'flex',
            justifyContent: 'start',
            padding: 1,
            marginLeft: 1,
            fontSize: 14
          }}
        >
          Notificações
        </Box>
        <Divider />
        <NotificationsContent />
        <Divider />
        <Box
          onClick={() => navigate('/notifications')}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 1,
            cursor: 'pointer'
          }}
        >
          <span className='hover:text-brand-600 mx-auto text-sm'>
            Veja todas
          </span>
        </Box>
      </Menu>
    </>
  )
}
