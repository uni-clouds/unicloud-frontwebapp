import { Avatar } from '../../Elements/Avatar'
import { ChatIcon } from '../../Elements/ChatIcon'
import { NotificationIcon } from '../../Elements/NotificationIcon'

export const NavHeader: React.FC = () => {
  return (
    <nav className='max-w-fit ' role='navigation' aria-controls='navigation'>
      <ul role='menu' className='flex flex-row gap-4 items-center'>
        <li>
          <ChatIcon message={false} />
        </li>
        <li>
          <NotificationIcon />
        </li>
        <li>
          <Avatar />
        </li>
        <li>dropdown</li>
      </ul>
    </nav>
  )
}
