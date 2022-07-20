import { Header } from './Header'
import { Layout } from '../../components/Layout'
import { UsersTable } from '../../components/Tables/Users'
import { useInviteList } from '../../hooks/useInviteList'
import { useUsersList } from '../../hooks/useUsersList'
import { TableSkeleton } from '../../components/Skeletons/TableSkeleton'

export const UsersList: React.FC = () => {
  const { data } = useInviteList()
  const { data: users, isLoading } = useUsersList()

  return (
    <Layout>
      <section
        className={`${
          users?.length >= 7 ? 'h-full' : 'h-screen'
        } w-full flex flex-col gap-6 mx-auto p-6`}
      >
        {!!isLoading ? (
          <div className='w-full'>
            <TableSkeleton />
          </div>
        ) : (
          <>
            <Header totalUsers={users?.length} data={data} />
            <UsersTable list={users} isLoading={isLoading} />
          </>
        )}
      </section>
    </Layout>
  )
}
