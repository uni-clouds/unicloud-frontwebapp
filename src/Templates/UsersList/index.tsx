import { Header } from './Header'
import { Layout } from '../../components/Layout'
import { UsersTable } from '../../components/Tables/Users'

export const UsersList: React.FC = () => {
  return (
    <Layout>
      <section className='w-full flex flex-col gap-6 mx-auto p-6'>
        <Header totalUsers='25' />
        <UsersTable />
      </section>
    </Layout>
  )
}
