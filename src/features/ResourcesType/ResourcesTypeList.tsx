import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Heading } from '../../components/Heading'
import { ResourcesListProps } from './types'
import * as Styled from './styles'

export const ResourcesTypeList: FC<ResourcesListProps> = ({ types }) => {
  return (
    <Styled.ContainerList>
      <Styled.CardResourcesTypes>
        <Heading size='normal' as='h3'>
          Seus recursos:
        </Heading>
        {types.map((type) => (
          <Styled.Box key={uuidv4()}>
            <type.icon size={30} color={type.color} />
            <p>{type.type}</p>
          </Styled.Box>
        ))}
      </Styled.CardResourcesTypes>
    </Styled.ContainerList>
  )
}
