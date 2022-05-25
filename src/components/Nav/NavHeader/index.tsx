import { Avatar } from '../../Avatar'
import { NotificationIcon } from '../../Elements/NotificationIcon'
import { MenuDropdown } from '../../MenuDropdown'

export const NavHeader: React.FC = () => {
  return (
    <nav className='max-w-fit' role='navigation' aria-controls='navigation'>
      <ul role='menu' className='flex flex-row gap-6 items-center'>
        <li className='text-2xl px-2'>
          <NotificationIcon />
        </li>
        <li className=' px-2'>
          <Avatar />
        </li>
        <li>
          <MenuDropdown />
        </li>
      </ul>
    </nav>
  )
}
