import { IoIosNotificationsOutline } from 'react-icons/io'
import { NotificationIconProps } from './types'

//criar o método para inserir o sinal de novas menssagens
export const NotificationIcon: React.FC<NotificationIconProps> = ({
  isNotification
}) => {
  return (
    <span
      className={`${
        !!isNotification ? 'after:bg-teal-custom' : 'after:transparent'
      } relative after:content-[" "] after:w-3 after:h-3  after:absolute after:rounded-full after:top-0 after:left-0`}
    >
      <IoIosNotificationsOutline />
    </span>
  )
}
