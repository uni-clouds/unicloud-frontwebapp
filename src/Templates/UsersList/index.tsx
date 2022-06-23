import { Header } from './Header'
import { Layout } from '../../components/Layout'
import { UsersTable } from '../../components/Tables/Users'
import { useUserList } from '../../hooks/useUserList'

export const UsersList: React.FC = () => {
  //const users = await api.get('/users/')
  const { data } = useUserList()

  return (
    <Layout>
      <section className='w-full flex flex-col gap-6 mx-auto p-6'>
        <Header totalUsers='25' data={data} />
        <UsersTable />
      </section>
    </Layout>
  )
}
