import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Paper } from '../../components/Paper'
import { Header } from '../../features/HeaderResourcesPage'
import { CreateResources } from '../../features/CreateResources'
import * as Styled from './styles'

export const ResourcesManager: FC = () => {
  return (
    <Layout>
      <section className='w-full h-screen flex flex-col mx-auto'>
        <Header />
        <Paper>
          <CreateResources />
        </Paper>
      </section>
    </Layout>
  )
}
