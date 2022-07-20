import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RadioButton } from '../../components/RadioButton'
import * as Styled from './styles'
import { ResourcesTypesSelectProps } from './types'

export const ResourcesTypeSelect: FC<ResourcesTypesSelectProps> = ({
  data
}) => {
  return (
    <Styled.Container>
      <Styled.List>
        {data?.map((item) => (
          <Styled.ListItem key={uuidv4()}>
            <RadioButton label={item.resource_type} id={item.id.toString()} />
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  )
}
