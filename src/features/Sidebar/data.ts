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
import { Options } from '../../components/NavItem/types'
import { makeMenuLevel } from '../../components/util/makeMenuLevel'

const MENU_OPTIONS = [
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

export const MENU_ITEMS: Options[] = makeMenuLevel(MENU_OPTIONS)
