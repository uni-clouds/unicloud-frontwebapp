import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Header } from './Header'
import { Paper } from '../../components/Paper'

export const ResourcesTypesDashboard: FC = () => {
  return (
    <Layout>
      <section className='w-full h-screen flex flex-col mx-auto '>
        <Header />
        <Paper>
          <h1>Dashboard aqui 🥸!!</h1>
        </Paper>
      </section>
    </Layout>
  )
}
