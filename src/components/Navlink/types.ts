import { ComponentType } from 'react'

export interface NavlinkProps {
  path: string
  Icon?: ComponentType
  title?: string
  depth?: number
}
