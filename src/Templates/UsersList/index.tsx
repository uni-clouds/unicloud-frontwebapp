import { Header } from './Header'
import { Layout } from '../../components/Layout'
import { UsersTable } from '../../components/Tables/Users'
import { useQuery } from 'react-query'
import { api } from '../../services/api'

export const UsersList: React.FC = () => {
  //const users = await api.get('/users/')
  const { data } = useQuery('get-users', getInvites)

  async function getInvites() {
    const invites = await api.get('/invite-user/')
    return invites
  }
  console.log('data', data)
  return (
    <Layout>
      <section className='w-full flex flex-col gap-6 mx-auto p-6'>
        <Header totalUsers='25' invites={data?.data} />
        <UsersTable />
      </section>
    </Layout>
  )
}
