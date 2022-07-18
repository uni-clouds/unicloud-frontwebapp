import { useLocation, NavLink } from 'react-router-dom'

import { MenuItem as MenuItemType } from '../data'
import { MenuItemContainer } from './MenuItem.styles'
import MenuItemsList from '../MenuItemsList'
import ExpandIcon from '../ExpandIcon'
import { useState } from 'react'

type MenuItemProps = {
  menuItem: MenuItemType
}

export default function MenuItem({
  menuItem: { name, icon: Icon, url, depth, subItems }
}: MenuItemProps) {
  const [isExpanded, toggleExpanded] = useState(false)

  const { pathname } = useLocation()
  const selected = pathname === url
  const isNested = subItems && subItems?.length > 0

  const onClick = () => {
    toggleExpanded((prev) => !prev)
  }

  return (
    <>
      <MenuItemContainer className={selected ? 'selected' : ''} depth={depth}>
        <NavLink to={url}>
          <div className='menu-item'>
            <Icon />
            <span>{name}</span>
          </div>
        </NavLink>
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuItemsList options={subItems} /> : null}
    </>
  )
}
