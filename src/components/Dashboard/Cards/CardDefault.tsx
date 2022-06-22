import { RiDashboardLine } from 'react-icons/ri'
import { BsCpu } from 'react-icons/bs'
import { MdOutlineStorage, MdOutlineSdStorage } from 'react-icons/md'
import { CardDefaultProps } from '../../../Templates/Dashboard/types'


export const CardDefault: React.FC<CardDefaultProps> = ({
  title,
  description,
  amount
}) => {
  return (
    <div className='w-full h-[10rem] bg-white custom-dark  p-6 text-base-600 dark:text-neutral-200 rounded-md shadow'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-2 items-center'>
          <h3 className='font-medium text-xl text-base-700 dark:text-slate-100'>{title}</h3>
          {title === 'POD' ? (
            <RiDashboardLine className='text-2xl' />
          ) : title === 'vCPU' ? (
            <BsCpu className='text-2xl' />
          ) : title === 'Memória' ? (
            <MdOutlineSdStorage className='text-2xl dark:text-slate-100'  />
          ) : (
            <MdOutlineStorage className='text-2xl ' />
          )}
        </div>
        <div>
          <p className='text-lg leading-4 '>
            {description}:
            <span className='text-xl font-bold text-brand-bitcoin align-middle'>
              {' '}
              {amount}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
