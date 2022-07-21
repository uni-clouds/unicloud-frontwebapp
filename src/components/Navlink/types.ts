export interface NavlinkProps {
  path: string
  icon?: string
  title?: string
  depth?: number
  nested: boolean
  expanded: boolean
  onClick: () => void
  isOpened: boolean
}
