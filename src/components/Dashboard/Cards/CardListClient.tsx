import { Skeleton } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { Title } from '../../Elements/TitleDashboard'
import { PartnersProps } from '../types'

export const CardListClient: React.FC<PartnersProps> = ({ partners, isLoading }) => {
  return (
    <div className='lg:w-[20rem] md:w-[15rem] h-full flex flex-col items-start bg-white py-4 px-6 rounded-md shadow w-60'>
     {isLoading ?
      <div className='flex flex-col justify-between gap-2'>
         <Skeleton variant='text' animation='wave' width={150}/>
         <Skeleton variant='text' animation='wave' width={200}/>
         <Skeleton variant='text' animation='wave' width={200}/>
         <Skeleton variant='text' animation='wave' width={200}/>
         <Skeleton variant='text' animation='wave' width={200}/>
         <Skeleton variant='text' animation='wave' width={200}/>
         <Skeleton variant='text' animation='wave' width={200}/>
      </div>
     :  <>
        <Title text='Parceiros' />
        <ul className='mt-6 flex flex-col gap-3 mx-auto'>
          {partners?.map((data) => (
            <li
              className='capitalize rounded-sm shadow-md py-2 border-l-2 border-l-brand-480'
              key={uuidv4()}
            >
              <div className='lg:w-[16.5rem] md:w-[10rem] max-w-xs mx-auto py-2'>
                <p className='text-xs font-normal px-4'>{data}</p>
              </div>
            </li>
          ))}
        </ul>
      </>}
    </div>
  )
}
