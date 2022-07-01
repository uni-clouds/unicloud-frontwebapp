import Breadcrumbs from '@mui/material/Breadcrumbs'
import { NavLink } from 'react-router-dom'
import { PathActiveProps } from './types'

export const PathActive: React.FC<PathActiveProps> = ({ paths }) => {
  return (
    <div role='presentation'>
      <Breadcrumbs aria-label='navigation'>
        {paths?.map((path) => (
          <NavLink
            to={`/${path.route}`}
            className={({ isActive }) => (isActive ? 'underline' : undefined)}
          >
            {path.path}
          </NavLink>
        ))}
      </Breadcrumbs>
    </div>
  )
}
