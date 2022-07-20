import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Paper } from '../../components/Paper'
import { Header } from '../../features/HeaderResourcesPage'
import { CreateResources } from '../../features/CreateResources'
import * as Styled from './styles'
import { useGetResources } from '../../hooks/useGetResources'
import { ResourcesList } from '../../features/ResourcesList'

export const ResourcesManager: FC = () => {
  const { data } = useGetResources()

  return (
    <Layout>
      <section className='w-full h-screen flex flex-col mx-auto'>
        <Header />
        <Paper>
          <Styled.Container>
            <CreateResources />
            {!!data && <ResourcesList resources={data} />}
          </Styled.Container>
        </Paper>
      </section>
    </Layout>
  )
}
