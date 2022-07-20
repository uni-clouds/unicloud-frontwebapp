export interface ResourcesListProps {
  types: Array<{
    resource_type: string
    id: number
  }>
}

export type ResourcesTypeList = {
  resource_type: string
  id: number
}

export interface BoxStyleProps {
  justify?: string
  gap?: string
  align?: string
  visibility?: string
}

export interface ResourceTypesManagerProps {
  visibility?: boolean
  id: number
}

export interface ModalResourceUpdateProps {
  isOpen: boolean
  handleClose: () => void
  id: number
}
