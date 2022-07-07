import { Divider } from '@mui/material'
import { NavLinksProps } from './types'

export const NavLinkLogin: React.FC<NavLinksProps> = ({ items }) => {
  return (
    <ul className='flex flex-row gap-1 items-center text-sm' aria-label='nav'>
      <li
        role='menuitem'
        key={items[0].name}
        className=' hover:underline decoration-current text-brand-600 hover:text-brand-700 transition-colors hover:ease-in-out dark:text-brand-500 dark:hover:text-brand-600'
      >
        <a
          href={items[0].path}
          role='link'
          rel='noopener noreferrer'
          target='_blank'
        >
          {items[0].name}
        </a>
      </li>
      <Divider flexItem>OU</Divider>
      <li
        role='menuitem'
        key={items[1].name}
        className=' hover:underline decoration-current text-brand-600 hover:text-brand-700 transition-colors hover:ease-in-out dark:text-brand-500 dark:hover:text-brand-600'
      >
        <a
          href={items[1].path}
          role='link'
          rel='noopener noreferrer'
          target='_blank'
        >
          {items[1].name}
        </a>
      </li>
    </ul>
  )
}
