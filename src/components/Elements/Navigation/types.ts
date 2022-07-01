import { LinkHTMLAttributes, ReactNode } from 'react'

export interface NavLinksProps {
  items: Array<ItemsType>
}

type ItemsType = {
  name: string
  path: string
}

export interface LinkInternalProps {
  name: string
  href: string
}

export interface PathActiveProps {
  paths: Array<{
    path: string
    route: string
  }>
}
