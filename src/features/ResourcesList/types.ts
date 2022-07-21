export interface ResourcesListProps {
  resources: Array<{
    id: number
    resource_name: string
  }>
}
export interface ResourcesListManagerProps {
  id: number
}

export interface ModalResourcesUpdateProps {
  isOpen: boolean
  id: number
  handleClose: () => void
}
