import { Header } from './Header'
import { Layout } from '../../components/Layout'
import { CustomersTable } from '../../components/Tables/Customers'
import { TableSkeleton } from '../../components/Skeletons/TableSkeleton'
import { useCustomersList } from '../../hooks/useCustomersList'

const CustomersList: React.FC = () => {
  const { data, isLoading, isError } = useCustomersList()

  return (
    <Layout>
      <section
        className={`${
          data?.length >= 5 ? 'h-full' : 'h-screen'
        } w-full flex flex-col gap-6 lg:mx-auto p-6`}
      >
        {!!isLoading || isError ? (
          <div className=' w-full '>
            <TableSkeleton />
          </div>
        ) : (
          <>
            <Header totalUsers={data?.length} data={data} />
            <CustomersTable list={data} />
          </>
        )}
      </section>
    </Layout>
  )
}

export default CustomersList
