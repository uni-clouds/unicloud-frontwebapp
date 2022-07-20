import Skeleton from '@mui/material/Skeleton'
import { HeaderSkeleton } from './HeaderSkeleton'
import { PaginationSkeleton } from './PaginationSkeleton'

export const TableSkeleton: React.FC = () => {
  return (
    <div className='w-800 flex flex-col gap-6 py-6 px-0 sm:px-6'>
      <HeaderSkeleton />
      <div className='flex flex-col p-2 border rounded gap-6'>
        <div className='flex flex-col justify-between items-end h-32'>
          <Skeleton
            variant='circular'
            animation='wave'
            height={30}
            width={30}
          />
          <div className='flex flex-col gap-2 w-full'>
            <Skeleton variant='rectangular' animation='wave' height={24} />
            <Skeleton variant='rectangular' animation='wave' height={2} />
          </div>
        </div>
        <Skeleton variant='rectangular' animation='wave' height={72} />
        <Skeleton variant='rectangular' animation='wave' height={72} />
        <Skeleton variant='rectangular' animation='wave' height={72} />
        <Skeleton variant='rectangular' animation='wave' height={72} />
        <Skeleton variant='rectangular' animation='wave' height={72} />
      </div>
      <PaginationSkeleton />
    </div>
  )
}
