import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Header } from './Header'
import { Paper } from '../../components/Paper'
import { ResourcesType } from '../../features/ResourcesType'

export const ResourcesTypesPage: FC = () => {
  return (
    <Layout>
      <section className='w-full h-screen flex flex-col mx-auto'>
        <Header />
        <Paper>
          <ResourcesType />
        </Paper>
      </section>
    </Layout>
  )
}
