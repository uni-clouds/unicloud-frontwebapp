import { FC, useCallback, useState } from 'react'
import { useGetResourcesType } from '../../hooks/useGetResourcesType'
import { CreateResources as CreateResourcesForm } from '../../components/Forms/CreateResources'

import * as Styled from './styles'

export const CreateResources: FC = () => {
  const { data } = useGetResourcesType()

  return (
    <Styled.Container>
      <CreateResourcesForm data={data} />
    </Styled.Container>
  )
}
