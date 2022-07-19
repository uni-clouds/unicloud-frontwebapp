import { FC } from 'react'
import { CreateResourceType } from '../../components/Forms/CreateResourceType'
import { ResourcesTypeList } from './ResourcesTypeList'

import { AiOutlineCloudServer } from 'react-icons/ai'

import * as Styled from './styles'
import { colors } from '../../styles/colors'

export const ResourcesType: FC = () => {
  const MOCK = [
    {
      icon: AiOutlineCloudServer,
      type: 'Compute',
      color: colors.brand[400]
    },
    {
      icon: AiOutlineCloudServer,
      type: 'Compute',
      color: colors.brand[450]
    },
    {
      icon: AiOutlineCloudServer,
      type: 'Compute',
      color: colors.brand[500]
    }
  ]
  return (
    <Styled.Container>
      <CreateResourceType />
      {MOCK.length > 0 && <ResourcesTypeList types={MOCK} />}
    </Styled.Container>
  )
}
