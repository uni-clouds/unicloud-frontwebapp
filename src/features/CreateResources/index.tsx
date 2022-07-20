import { FC } from 'react'
import { useGetResourcesType } from '../../hooks/useGetResourcesType'
import { CreateResources as CreateResourcesForm } from '../../components/Forms/CreateResources'
import { ResourcesTypeSelect } from '../ResourcesTypeSelect'
import * as Styled from './styles'

export const CreateResources: FC = () => {
  const { data } = useGetResourcesType()
  return (
    <Styled.Container>
      <ResourcesTypeSelect data={data} />
      <CreateResourcesForm id={20} />
    </Styled.Container>
  )
}
