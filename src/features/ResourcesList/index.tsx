import { FC, useState } from 'react'
import { Heading } from '../../components/Heading'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { colors } from '../../styles/colors'
import { ResourcesListManager } from './ResourcesListManager'
import { ResourcesListProps } from './types'
import { Icon } from '@iconify-icon/react'

import * as Styled from './styles'
export const ResourcesList: FC<ResourcesListProps> = ({ resources }) => {
  return (
    <Styled.ListBox>
      <Styled.CardResources>
        <Heading size='normal' as='h3'>
          Seus recursos ativos:
        </Heading>
        {resources.map((resource) => (
          <Styled.Box key={resource.id} justify='between'>
            <Styled.Box>
              <Icon
                icon='carbon:fetch-upload-cloud'
                style={{ fontSize: '1.5rem', color: colors.cyan.custom }}
              />
              <p>{resource.resource_name}</p>
            </Styled.Box>
            <ResourcesListManager id={resource.id} />
          </Styled.Box>
        ))}
      </Styled.CardResources>
    </Styled.ListBox>
  )
}
