import { Header } from './Header'
import { Layout } from '../../../components/Layout'
import { CustomersTable } from '../../../components/Tables/Customers'
import { TableSkeleton } from '../../../components/Skeletons/TableSkeleton'
import { useCustomersList } from '../../../hooks/useCustomersList'
import { CustomerRequestsTable } from '../../../components/Tables/CustomerRequests'

const CustomerRequestsList: React.FC = () => {
  const { data, isLoading, isError } = useCustomersList()

  const dataMock = [
    {
      cnpj: '11111111111111',
      razao_social: 'Razao Social 1',
      email: 'email1@email.com',
      request_by: 'Usuário A',
      resources: 'compute',
      created_at: '1997-07-16T19:20+01:00',
      expires_at: '1997-10-16T19:20+01:00',
      is_pending: true,
      id: '1',
      timeline: [
        {
          type: 'request',
          user: 'Usuário A',
          date: '1997-07-17T19:20+01:00'
        },
        {
          type: 'disapproval',
          user: 'Usuário Root',
          date: '1997-07-21T19:20+01:00'
        },
        {
          type: 'request',
          user: 'Usuário A',
          date: '1997-07-23T19:20+01:00'
        },
        {
          type: 'approval',
          user: 'Usuário Root B',
          date: '1997-07-27T19:20+01:00'
        }
      ]
    },
    {
      cnpj: '22222222222222',
      razao_social: 'Razao Social 2',
      email: 'email2@email.com',
      request_by: 'Usuário B',
      resources: 'storage',
      created_at: '1997-07-17T19:20+01:00',
      expires_at: '1997-10-17T19:20+01:00',
      is_pending: false,
      id: '2',
      timeline: [
        {
          type: 'request',
          user: 'Usuário A',
          date: '1997-07-17T19:20+01:00'
        },
        {
          type: 'disapproval',
          user: 'Usuário Root',
          date: '1997-07-21T19:20+01:00'
        },
        {
          type: 'request',
          user: 'Usuário A',
          date: '1997-07-23T19:20+01:00'
        },
        {
          type: 'approval',
          user: 'Usuário Root B',
          date: '1997-07-27T19:20+01:00'
        }
      ]
    }
  ]

  return (
    <Layout>
      <section
        className={`${
          data?.length >= 5 ? 'h-full' : 'h-screen'
        } w-full flex flex-col gap-6 lg:mx-auto p-0 md:p-6`}
      >
        {/* {!!isLoading || isError ? (
          <div className=' w-full '>
            <TableSkeleton />
          </div>
        ) : ( */}
        <>
          <Header totalUsers={dataMock?.length} data={dataMock} />
          <CustomerRequestsTable list={dataMock} />
        </>
        {/* )} */}
      </section>
    </Layout>
  )
}

export default CustomerRequestsList
