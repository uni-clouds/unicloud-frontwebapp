import { FC, useCallback, useState } from 'react'
import { useGetResourcesType } from '../../hooks/useGetResourcesType'
import { CreateResources as CreateResourcesForm } from '../../components/Forms/CreateResources'

import * as Styled from './styles'

export const CreateResources: FC = () => {
  const { data } = useGetResourcesType()
  const [resourceId, setResourceId] = useState(null)
  console.log('🐸', resourceId)

  const getResourceId = useCallback(
    (value: string) => {
      setResourceId(Number(value))
    },
    [resourceId]
  )
  return (
    <Styled.Container>
      <CreateResourcesForm data={data} />
    </Styled.Container>
  )
}
