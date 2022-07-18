import React from 'react'
import {
  MdDashboard,
  MdShoppingCart,
  MdPeople,
  MdAttachMoney,
  MdAddShoppingCart,
  MdDone,
  MdBusiness,
  MdHomeWork,
  MdPerson
} from 'react-icons/md'

const MENU_OPTIONS: MenuOption[] = [
  {
    name: 'Dashboard',
    icon: MdDashboard,
    url: '/'
  },
  {
    name: 'Orders',
    icon: MdShoppingCart,
    url: '/orders',
    subItems: [
      {
        name: 'New',
        icon: MdAddShoppingCart,
        url: '/new-orders'
      },
      {
        name: 'Completed',
        icon: MdDone,
        url: '/completed-orders'
      }
    ]
  },
  {
    name: 'Customers',
    icon: MdPeople,
    url: '/customers',
    subItems: [
      {
        name: 'Corporate',
        icon: MdBusiness,
        url: '/corporate'
      },
      {
        name: 'SMB',
        icon: MdHomeWork,
        url: '/smb',
        subItems: [
          {
            name: 'Retail',
            icon: MdPerson,
            url: '/retail'
          }
        ]
      }
    ]
  },
  {
    name: 'Inventory',
    icon: MdAttachMoney,
    url: '/inventory'
  }
]

export type MenuItem = {
  name: string
  icon: React.ComponentType
  url: string
  id: string
  depth: number
  subItems?: MenuItem[]
}

type MenuOption = {
  name: string
  icon: React.ComponentType
  url: string
  subItems?: MenuOption[]
}

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined
  }))
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS)
