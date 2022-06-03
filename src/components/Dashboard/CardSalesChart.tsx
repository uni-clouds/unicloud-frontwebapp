import { MultiLineChart } from './Charts/MultiLineChart'
import { Title } from '../Elements/TitleDashboard'

export const CardSalesChart: React.FC = () => {
  return (
    <div className='flex-1 h-full flex flex-col bg-white p-4 text-base-700 rounded-md shadow'>
      <div>
        <Title text='Sales Statistics' />
      </div>
      <div className='w-[700px] h-full mx-auto'>
        <MultiLineChart />
      </div>
    </div>
  )
}
