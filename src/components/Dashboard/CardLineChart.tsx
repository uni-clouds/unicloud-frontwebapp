import { useState } from 'react'
import { IoArrowUpOutline, IoArrowDownOutline } from 'react-icons/io5'
import { SingleLineChart } from './Charts/SingleLineChart'
import { CardLineProps } from './types'

export const CardLineChart: React.FC<CardLineProps> = ({
  title,
  total,
  index,
  type
}) => {
  const [isPositive, setIsPositive] = useState(true)

  let currency
  if (type === 'number') {
    currency = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(Number(total))
  }

  const percentage = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 1,
    maximumSignificantDigits: 2
  }).format(index / 100)

  return (
    <div className='grid grid-flow-col-dense grid-cols-2 w-full gap-2 place-content-center bg-white p-4 text-base-700 rounded-md shadow'>
      <div className='flex flex-col justify-center gap-2'>
        <h3 className='capitalize font-semibold text-normal'>{title}</h3>
        <p className='font-bold text-2xl'>
          {type === 'number' ? currency : total}
        </p>
        <div className='text-sm flex-row gap-1 flex items-center'>
          {!!isPositive ? (
            <span className='text-green-custom font-semibold flex flex-row items-center'>
              <IoArrowUpOutline /> {percentage}
            </span>
          ) : (
            <div className='text-red-custom font-semibold flex flex-row items-center'>
              <IoArrowDownOutline />
              {percentage}
            </div>
          )}
          <span> vs. last week</span>
        </div>
      </div>
      <div className='col-span-2 h-[8rem] flex items-center'>
        <SingleLineChart />
      </div>
    </div>
  )
}
