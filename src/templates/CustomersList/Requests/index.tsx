import { Header } from './Header'
import { Layout } from '../../../components/Layout'
import { CustomersTable } from '../../../components/Tables/Customers'
import { TableSkeleton } from '../../../components/Skeletons/TableSkeleton'
import { useCustomersList } from '../../../hooks/useCustomersList'
import { CustomerRequestTable } from '../../../components/NewTables/CustomerRequest/CustomerRequestTable'
import {
  RequestObject,
  requestTableCells
} from '../../../components/NewTables/CustomerRequest/types'
// import { CustomerRequestsTable } from '../../../components/Tables/CustomerRequests'

const CustomerRequestsList: React.FC = () => {
  const { data, isLoading, isError } = useCustomersList()

  const dataMock: RequestObject[] = [
    {
      id: 1,
      customer: 'PREFEITURA MUNICIPAL DE PINHAIS',
      opportunity_name:
        'Licitação de compute e storage da Prefeitura de Pinhais.',
      opportunity_description:
        'Abertura de licitação dos serviços de cloud da secretaria de Urbanismo de Pinhais. Data limite da oferta é 01/01/2023',
      user: 'usuarioA@partner.com ',
      request_date: '1997-07-16T19:20+01:00',
      status: 'approved',
      resources: [
        {
          resource_name: 'ssd',
          resource_id: 2
        },
        {
          resource_name: 'memoria',
          resource_id: 3
        }
      ],
      history: [
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
      id: 2,
      customer: 'ASSOCIAÇÃO PARANENSE DO ESCRITÓRIOS DE ARQUITETURA - ASPEA',
      opportunity_name: 'Projeto de computing para escritórios associados',
      opportunity_description:
        'Oportunidade de oferecer serviços de cloud computing para os associados da ASPEA. Contato com a superintendente da associação Marcela Ventura.',
      user: 'usuarioB@partner.com ',
      request_date: '1997-07-16T19:20+01:00',
      status: 'pending',
      resources: [
        {
          resource_name: 'gpu',
          resource_id: 4
        },
        {
          resource_name: 'memoria',
          resource_id: 3
        }
      ],
      history: [
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
        {!!isLoading || isError ? (
          <div className=' w-full '>
            <TableSkeleton />
          </div>
        ) : (
          <>
            <Header totalUsers={dataMock?.length} />
            {/* <CustomerRequestsTable list={dataMock} /> */}
            <CustomerRequestTable
              cells={requestTableCells}
              data={dataMock}
              modalCell
            />
          </>
        )}
      </section>
    </Layout>
  )
}

export default CustomerRequestsList
