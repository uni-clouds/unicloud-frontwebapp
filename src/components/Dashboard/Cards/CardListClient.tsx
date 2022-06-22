import { Skeleton } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { PartnersProps } from '../../../Templates/Dashboard/types'
import { Title } from '../../Elements/TitleDashboard'

export const CardListClient: React.FC<PartnersProps> = ({
  partners,
  isLoading,
  isError
}) => {
  return (
    <div className='lg:w-[25rem] md:w-[20rem] h-full flex flex-col items-start bg-white custom-dark py-4 px-6 rounded-md shadow w-60'>
      {isLoading || isError !== 'success' ? (
        <div className='flex flex-col justify-between gap-4 items-center w-full'>
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
          <Skeleton variant='text' animation='wave' width={240} height={35} />
        </div>
      ) : (
        <>
          <Title text='Parceiros' />
          <ul className='w-full mt-6 flex flex-col items-start gap-3 overflow-y-scroll scrollbar-thin  dark:scrollbar-thin scrollbar-track-transparent scrollbar-thumb-stone-100 hover:scrollbar-thumb-stone-100 dark:scrollbar-thumb-transparent dark:hover:scrollbar-thumb-stone-700'>
            {partners?.map((data) => (
              <li
                className='w-full flex items-start capitalize rounded-sm shadow-md py-2 border-l-2 border-l-brand-480 dark:border-b dark:border-b-zinc-700'
                key={uuidv4()}
              >
                <div className='lg:w-[16.5rem] md:w-[10rem] max-w-xs mx-auto py-2'>
                  <p className='text-xs font-normal px-4'>{data}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
