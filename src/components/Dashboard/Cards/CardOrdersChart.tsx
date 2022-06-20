import { Title } from "../../Elements/TitleDashboard"
import { DoughnutChart } from "../Charts/DoghnutChart"


export const CardOrdersChart: React.FC = () => {
  return (
    <div className='w-1/3 flex flex-col bg-white p-4 text-base-700 rounded-md shadow h-full'>
      <div>
        <Title text='Order Statistics' />
      </div>
      <div className='w-[350px] h-60 mx-auto'>
        <DoughnutChart />
      </div>
    </div>
  )
}
