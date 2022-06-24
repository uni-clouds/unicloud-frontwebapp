import { Header } from './Header'
import { Layout } from '../../components/Layout'
import { UsersTable } from '../../components/Tables/Users'
import { useInviteList } from '../../hooks/useInviteList'
import { useUsersList } from '../../hooks/useUsersList'

export const UsersList: React.FC = () => {
  //const users = await api.get('/users/')
  const { data } = useInviteList()
  const { data: users } = useUsersList()

  return (
    <Layout>
      <section className='w-full flex flex-col gap-6 mx-auto p-6'>
        <Header totalUsers='25' data={data} />
        <UsersTable list={users} />
      </section>
    </Layout>
  )
}
