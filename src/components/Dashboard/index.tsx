import { v4 as uuidv4 } from 'uuid'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { PurpleButton } from '../Elements/Buttons/PurpleButton'
import { CardListStore } from './CardListStore'
import { CardDefault } from './CardDefault'
import { ClientTable } from '../Tables'

export const Dashboard: React.FC = () => {
  const mockData = [
    {
      title: 'POD',
      description: 'Pods ativos',
      amount: 3
    },
    {
      title: 'vCPU',
      description: 'Quantidade de vCPU',
      amount: 67
    },
    {
      title: 'Memória',
      description: 'Memória em uso',
      amount: 34567
    },
    {
      title: 'Armazenamento',
      description: 'Espaço em utilização',
      amount: 987654
    }
  ]
  return (
    <section className='flex flex-col gap-12'>
      <div className='flex flex-row justify-between items-center p-2 '>
        <h1 className='font-bold leading-10 text-3xl text-base-700 drop-shadow-xl'>
          Dashboard
        </h1>
        <PurpleButton onclick={() => {}} name='reports'>
          <HiOutlineDocumentReport />
          Reports
        </PurpleButton>
      </div>
      <div className='flex flex-row gap-24 items-center'>
        {mockData.map((data) => (
          <CardDefault
            title={data.title}
            description={data.description}
            amount={data.amount}
            key={uuidv4()}
          />
        ))}
      </div>
      <div className='flex flex-row gap-14 justify-between items-center '>
        <ClientTable />
        <CardListStore />
      </div>
    </section>
  )
}
