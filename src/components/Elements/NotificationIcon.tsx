import { Badge } from '@mui/material'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NotificationIconProps } from './types'

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  quantity
}) => {
  //
  return (
    <span className={`text-base-500 dark:text-inherit text-3xl`}>
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
    </span>
  )
}
