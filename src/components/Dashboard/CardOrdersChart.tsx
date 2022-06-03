import { DoughnutChart } from './Charts/DoghnutChart'

export const CardOrdersChart: React.FC = () => {
  return (
    <div className=' grid place-content-center bg-white p-4 text-base-700 rounded-md shadow'>
      <h3 className='font-semibold text-xl mb-2 py-2'>Order Statistics</h3>
      <DoughnutChart />
    </div>
  )
}
