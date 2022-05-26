import { Avatar } from '../../Avatar'
import { MenuDropdown } from './MenuDropdown'
import { Notifications } from './Notifications'

export const NavHeader = () => {
  return (
    <nav className='max-w-fit' role='navigation' aria-controls='navigation'>
      <ul role='menu' className='flex flex-row gap-6 items-center'>
        <li className='px-2'>
          <Notifications />
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
