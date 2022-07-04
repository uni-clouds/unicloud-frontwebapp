export interface InformationDisplayProps {
  text: string
  icon?: boolean
}

export interface NavigationItemProps {
  text: string
  onClick: () => void
  active?: boolean
}
