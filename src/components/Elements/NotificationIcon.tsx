import { Badge, IconButton, Tooltip } from '@mui/material'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NotificationIconProps } from './types'

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  quantity
}) => {
  const notificationQuantity =
    quantity === 1
      ? `Você tem ${quantity} notificação`
      : `Você tem ${quantity} notificações`
  const message =
    quantity === 0 ? 'Você não tem notificações' : notificationQuantity

  return (
    <Tooltip title={message}>
      <IconButton className={`text-base-500 dark:text-inherit text-3xl`}>
        <Badge
          badgeContent={quantity}
          max={99}
          color='default'
          overlap='circular'
          sx={{
            '.MuiBadge-badge': {
              backgroundColor: '#20c997',
              color: 'inherit'
            }
          }}
        >
          <IoIosNotificationsOutline />
        </Badge>
      </IconButton>
    </Tooltip>
  )
}
