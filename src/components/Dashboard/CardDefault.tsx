import { RiDashboardLine } from 'react-icons/ri'
import { BsCpu } from 'react-icons/bs'
import { GrMemory } from 'react-icons/gr'
import { MdOutlineStorage } from 'react-icons/md'
import { CardDefaultProps } from './types'

export const CardDefault: React.FC<CardDefaultProps> = ({
  title,
  description,
  amount
}) => {
  return (
    <div className='w-full h-[10rem] bg-white p-6 text-base-700 rounded-md shadow'>
      <div className='flex flex-col justify-center gap-6'>
        <div className='flex flex-row gap-4 items-center'>
          <h3 className='font-bold text-2xl'>{title}</h3>
          {title === 'POD' ? (
            <RiDashboardLine className='text-2xl drop-shadow-xl' />
          ) : title === 'vCPU' ? (
            <BsCpu className='text-2xl drop-shadow-xl' />
          ) : title === 'Memória' ? (
            <GrMemory className='text-2xl drop-shadow-xl' />
          ) : (
            <MdOutlineStorage className='text-2xl drop-shadow-xl' />
          )}
        </div>
        <p className='text-lg'>
          {description}:
          <span className='text-xl font-bold text-cyan-custom'> {amount}</span>
        </p>
      </div>
    </div>
  )
}
