import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Header } from './Header'
import { Paper } from '../../components/Paper'
import { NavigationTabs } from '../../features/NavigationTabs'
import { RESOURCES_TYPES_LINKS } from '../../constants/navigation'

export const ResourcesTypesDashboard: FC = () => {
  return (
    <Layout>
      <section className='w-full h-screen flex flex-col mx-auto p-6'>
        <NavigationTabs links={RESOURCES_TYPES_LINKS} />
        <Header />
        <Paper>
          <h1>Dashboard aqui 🥸!!</h1>
        </Paper>
      </section>
    </Layout>
  )
}
