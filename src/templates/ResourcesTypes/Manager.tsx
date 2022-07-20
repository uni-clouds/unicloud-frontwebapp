import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Paper } from '../../components/Paper'
import { Header } from './Header'

export const Panel: FC = () => {
  return (
    <Layout>
      <section className='w-full h-screen flex flex-col mx-auto'>
        <Header />
        <Paper>
          <h1>Olá</h1>
        </Paper>
      </section>
    </Layout>
  )
}
