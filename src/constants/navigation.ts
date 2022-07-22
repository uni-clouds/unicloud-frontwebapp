import { Options } from '../components/NavItem/types'
import { makeMenuLevel } from '../util/makeMenuLevel'

import i18n from '../i18n'

const translate = i18n.t

export const MENU_OPTIONS = [
  {
    name: 'Dashboard',
    icon: 'carbon:dashboard',
    url: '/'
  },
  {
    name: translate('resources'),
    icon: 'clarity:resource-pool-outline-badged',
    url: '/resources'
  },
  {
    name: translate('pods'),
    icon: 'eos-icons:pod-outlined',
    url: '/unicloud-pods'
  },
  //codicon:graph
  {
    name: translate('monitoring'),
    icon: 'system-uicons:graph-box',
    url: '/monitor'
  },

  {
    name: translate('customers'),
    icon: 'wpf:business-contact',
    url: '/customers'
  },
  {
    name: translate('contracts'),
    icon: 'clarity:contract-line',
    url: '/contracts'
  },
  {
    name: translate('users'),
    icon: 'ph:users-three-thin',
    url: '/user-list-default'
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
