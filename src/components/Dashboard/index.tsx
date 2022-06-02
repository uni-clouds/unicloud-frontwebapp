import { v4 as uuidv4 } from 'uuid'
import { CardLineChart } from './CardLineChart'
import { CardListStore } from './CardListStore'
import { CardOrdersChart } from './CardOrdersChart'
import { CardSalesChart } from './CardSalesChart'

export const Dashboard: React.FC = () => {
  const mockData = [
    {
      title: "Today's order",
      total: 1975,
      index: 4.63,
      type: 'string'
    },
    {
      title: "Today's revenue",
      total: 2.293,
      index: 2.63,
      type: 'number'
    },
    {
      title: "Today's customers",
      total: 847,
      index: 4.63,
      type: 'string'
    },
    {
      title: "Today's visitors",
      total: '23,485',
      index: 3.6,
      type: 'string'
    }
  ]
  return (
    <section className='flex flex-col gap-6'>
      <div className='flex flex-row gap-4 justify-between items-center'>
        {mockData.map((data) => (
          <CardLineChart
            title={data.title}
            total={data.total}
            index={data.index}
            type={data.type}
            key={uuidv4()}
          />
        ))}
      </div>
      <div className='flex flex-row gap-4 justify-between items-center'>
        <CardSalesChart />
        <CardOrdersChart />
        <CardListStore />
      </div>
    </section>
  )
}
