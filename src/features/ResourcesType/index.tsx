import { FC } from 'react'
import { CreateResourceType } from '../../components/Forms/CreateResourceType'

import * as Styled from './styles'

export const ResourcesType: FC = () => {
  return (
    <Styled.Container>
      <CreateResourceType />
    </Styled.Container>
  )
}
