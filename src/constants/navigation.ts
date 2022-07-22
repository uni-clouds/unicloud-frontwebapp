import { Options } from '../components/NavItem/types'
import { makeMenuLevel } from '../util/makeMenuLevel'

import i18n from '../i18n'

const translate = i18n.t

export const MENU_OPTIONS = [
  {
    name: 'Dashboard',
    icon: 'carbon:dashboard',
    fontSize: '1.45rem',
    url: '/'
  },
  {
    name: translate('resources'),
    icon: 'clarity:resource-pool-outline-badged',
    fontSize: '1.4rem',
    url: '/resources'
  },
  {
    name: translate('pods'),
    icon: 'iconoir:antenna',
    fontSize: '1.5rem',
    url: '/unicloud-pods'
  },
  {
    name: translate('monitoring'),
    icon: 'system-uicons:graph-box',
    fontSize: '1.65rem',
    url: '/monitor'
  },
  {
    name: translate('customers'),
    icon: 'typcn:business-card',
    fontSize: '1.45rem',
    url: '/customers'
  },
  {
    name: translate('contracts'),
    icon: 'teenyicons:contract-outline',
    url: '/contracts'
  },
  {
    name: translate('users'),
    icon: 'ph:users-three',
    url: '/user-list-default',
    fontSize: '1.5rem'
  }
]

export const MENU_ITEMS: Options[] = makeMenuLevel(MENU_OPTIONS)

export const RESOURCES_TYPES_LINKS = [
  {
    name: 'Painel',
    icon: 'ph:table-thin',
    path: '/resources'
  },
  {
    name: 'Tipos',
    icon: 'ph:codepen-logo-thin',
    path: '/resources/types'
  },
  {
    name: 'Gerenciamento',
    icon: 'ph:chart-bar-horizontal-thin',
    path: '/resources/settings'
  }
]

export const CONTRACTS_LINKS = [
  {
    name: 'Criar',
    icon: 'bi:file-earmark-plus',
    path: '/contracts'
  },
  {
    name: 'Lista',
    icon: 'carbon:list',
    path: '/contracts/list'
  }
]
