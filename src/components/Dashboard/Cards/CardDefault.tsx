import { RiDashboardLine } from 'react-icons/ri'
import { BsCpu } from 'react-icons/bs'
import { GrMemory } from 'react-icons/gr'
import { MdOutlineStorage } from 'react-icons/md'
import { CardDefaultProps } from '../types'

export const CardDefault: React.FC<CardDefaultProps> = ({
  title,
  description,
  amount
}) => {
  return (
    <div className='w-full h-[10rem] bg-white p-6 text-base-600 rounded-md shadow'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-2 items-center'>
          <h3 className='font-medium text-xl text-base-700'>{title}</h3>
          {title === 'POD' ? (
            <RiDashboardLine className='text-2xl drop-shadow-md' />
          ) : title === 'vCPU' ? (
            <BsCpu className='text-2xl drop-shadow-md' />
          ) : title === 'Memória' ? (
            <GrMemory className='text-2xl drop-shadow-md' />
          ) : (
            <MdOutlineStorage className='text-2xl drop-shadow-md' />
          )}
        </div>
        <div>
          <p className='text-lg leading-4 '>
            {description}:
            <span className='text-xl font-bold text-brand-450 align-middle'>
              {' '}
              {amount}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
