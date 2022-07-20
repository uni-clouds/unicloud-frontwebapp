import { ResourcesTypeList } from '../../../features/ResourcesType/types'

export type TypeResources = {
  type_id: number
  resource: string
}
export interface CreateResourcesFormProps {
  data: ResourcesTypeList[]
}
