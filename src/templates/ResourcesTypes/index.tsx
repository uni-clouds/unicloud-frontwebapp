import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Header } from './Header'
import { Paper } from '../../components/Paper'

import { Icon } from '@iconify-icon/react'

export const ResourcesTypesDashboard: FC = () => {
  return (
    <Layout>
      <section className='w-full h-screen flex flex-col mx-auto '>
        <Header />
        <Paper>
          <h1>Dashboard aqui 🥸!!</h1>
          <Icon icon='mdi-light:alert' />
        </Paper>
      </section>
    </Layout>
  )
}
