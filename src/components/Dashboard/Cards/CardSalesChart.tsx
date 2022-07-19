import { Title } from "../../Elements/TitleDashboard"
import { MultiLineChart } from "../Charts/MultiLineChart"
import { FilterChart } from "../FilterChart"

export const CardSalesChart: React.FC = () => {
  return (
    <div className='flex-1 h-full flex flex-col bg-white p-4 text-base-700 rounded-md shadow'>
      <div className='flex - flex-row items-center justify-between'>
        <Title text='Sales Statistics' />
        <FilterChart />
      </div>
      <div className='w-[700px] h-full mx-auto'>
        <MultiLineChart />
      </div>
    </div>
  )
}
