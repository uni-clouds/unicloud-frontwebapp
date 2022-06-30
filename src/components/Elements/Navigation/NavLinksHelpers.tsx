import { Link, Outlet } from 'react-router-dom'
import { NavLinksProps } from './types'

export const NavLinksHelpers: React.FC<NavLinksProps> = ({ items }) => {
  return (
    <ul className='flex items-center justify-evenly text-sm' aria-label='nav'>
      {items.map((item) => (
        <li
          role='menuitem'
          key={item.name}
          className='py-2 px-4 leading-6 hover:underline decoration-current text-brand-600 hover:text-brand-700 transition-colors hover:ease-in-out dark:text-brand-500 dark:hover:text-brand-600'
        >
          <Link to={item.path}> {item.name}</Link>
        </li>
      ))}
      <Outlet />
    </ul>
  )
}
