import {
  RiDashboardLine,
  RiTeamLine,
  RiNumbersLine,
  RiGroup2Line
} from 'react-icons/ri'
import {
  MdDashboard,
  MdOutlineSettings,
  MdOutlineSettingsSuggest
} from 'react-icons/md'
import { AiOutlineFileText } from 'react-icons/ai'

import { Options } from '../components/NavItem/types'
import { makeMenuLevel } from '../util/makeMenuLevel'

import i18n from '../i18n'

const translate = i18n.t

export const MENU_OPTIONS = [
  {
    name: 'Dashboard',
    icon: MdDashboard,
    url: '/'
  },
  {
    name: translate('customers'),
    icon: RiGroup2Line,
    url: '/customers'
  },
  {
    name: translate('pods'),
    icon: RiDashboardLine,
    url: '/unicloud-pods'
  },
  {
    name: translate('monitoring'),
    icon: RiNumbersLine,
    url: '/monitor'
  },
  {
    name: translate('resources'),
    icon: MdOutlineSettings,
    url: '/resources'
  },
  {
    name: translate('contracts'),
    icon: AiOutlineFileText,
    url: '/contracts'
  },
  {
    name: translate('users'),
    icon: RiTeamLine,
    url: '/user-list-default'
  }
]

export const MENU_ITEMS: Options[] = makeMenuLevel(MENU_OPTIONS)

export const RESOURCES_TYPES_LINKS = [
  {
    name: 'Painel',
    icon: MdOutlineSettingsSuggest,
    path: '/resources'
  },
  {
    name: 'Tipos',
    icon: MdOutlineSettingsSuggest,
    path: '/resources-types'
  },
  {
    name: 'Gerenciamento',
    icon: MdOutlineSettingsSuggest,
    path: '/resources-settings'
  }
]
