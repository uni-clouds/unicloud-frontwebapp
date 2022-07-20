import { FC, useState } from 'react'
import { Heading } from '../../components/Heading'
import { ResourcesListProps } from './types'
import * as Styled from './styles'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { colors } from '../../styles/colors'
import { ResourcesTypesManager } from './ResourceTypesManager'

export const ResourcesTypeList: FC<ResourcesListProps> = ({ types }) => {
  return (
    <Styled.ContainerList>
      <Styled.CardResourcesTypes>
        <Heading size='normal' as='h3'>
          Seus recursos:
        </Heading>
        {types.map((type) => (
          <Styled.Box key={type.id} justify='between'>
            <Styled.Box>
              <AiOutlineCloudServer size={30} color={colors.brand[450]} />
              <p>{type.resource_type}</p>
            </Styled.Box>
            <ResourcesTypesManager id={type.id} />
          </Styled.Box>
        ))}
      </Styled.CardResourcesTypes>
    </Styled.ContainerList>
  )
}
