import { Link, Outlet } from 'react-router-dom'
import { NavLinksProps } from './types'

export const NavLinksHelpers: React.FC<NavLinksProps> = ({ items }) => {
  return (
    <ul className='flex items-center justify-evenly text-sm' aria-label='nav'>
      {items.map((item) => (
        <li
          role='menuitem'
          key={item.name}
          className='py-2 px-4 text-brand-600 hover:text-brand-700 transition-colors hover:ease-in-out'
        >
          <Link to={item.path}> {item.name}</Link>
        </li>
      ))}
      <Outlet />
    </ul>
  )
}
