export interface InformationDisplayProps {
  text: string
  icon?: boolean
  label?: string
}

export interface NavigationItemProps {
  text: string
  onClick: () => void
  active?: boolean
}
