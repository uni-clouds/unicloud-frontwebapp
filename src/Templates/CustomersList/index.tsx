import { Header } from './Header'
import { Layout } from '../../components/Layout'
import { UsersTable } from '../../components/Tables/Users'
import { TableSkeleton } from '../../components/Tables/TableSkeleton'

const CustomersList: React.FC = () => {
  const users = []
  const isLoading = false
  const data = []
  return (
    <Layout>
      <section
        className={`${
          users?.length >= 7 ? 'h-full' : 'h-screen'
        } w-full flex flex-col gap-6 mx-auto p-6`}
      >
        {!!isLoading ? (
          <div className='grid place-content-center p-6 items-center gap-6 justify-center'>
            <TableSkeleton width={800} />
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

export default CustomersList
