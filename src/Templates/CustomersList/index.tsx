import { Header } from './Header'
import { Layout } from '../../components/Layout'
import { CustomersTable } from '../../components/Tables/Customers'
import { TableSkeleton } from '../../components/Tables/TableSkeleton'
import { useCustomersList } from '../../hooks/useCustomersList'

const CustomersList: React.FC = () => {
  const { data, isLoading, isError } = useCustomersList()

  return (
    <Layout>
      <section
        className={`${
          data?.length >= 5 ? 'h-full' : 'h-screen'
        } w-full flex flex-col gap-6 mx-auto p-6`}
      >
        {!!isLoading ? (
          <div className='grid place-content-center p-6 items-center gap-6 justify-center'>
            <TableSkeleton width={800} />
          </div>
        ) : (
          <>
            <Header totalUsers={data?.length} data={data} />
            <CustomersTable
              list={data}
              isError={isError}
              isLoading={isLoading}
            />
          </>
        )}
      </section>
    </Layout>
  )
}

export default CustomersList
