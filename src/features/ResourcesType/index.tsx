import { FC } from 'react'
import { CreateResourceType } from '../../components/Forms/CreateResourceType'
import { ResourcesTypeList } from './ResourcesTypeList'
import { useGetResourcesType } from '../../hooks/useGetResourcesType'

import * as Styled from './styles'

export const ResourcesType: FC = () => {
  const { data } = useGetResourcesType()

  return (
    <Styled.Container>
      <CreateResourceType />
      {data?.length > 0 && <ResourcesTypeList types={data} />}
    </Styled.Container>
  )
}
