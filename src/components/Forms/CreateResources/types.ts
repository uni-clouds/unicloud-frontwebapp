import { ResourcesTypeList } from '../../../features/ResourcesType/types'

export type TypeResources = {
  type_id: number
  resource_name: string
}
export interface CreateResourcesFormProps {
  data: ResourcesTypeList[]
}
