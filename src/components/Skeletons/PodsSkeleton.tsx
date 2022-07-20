import Skeleton from '@mui/material/Skeleton'
import { HeaderSkeleton } from './HeaderSkeleton'

export const PodsSkeleton: React.FC = () => {
  return (
    <div className='w-800 flex flex-col gap-6 py-6 px-0 sm:px-6'>
      <HeaderSkeleton />
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 '>
        <Skeleton variant='rectangular' animation='wave' height={200} />
        <Skeleton variant='rectangular' animation='wave' height={200} />
        <Skeleton variant='rectangular' animation='wave' height={200} />
        <Skeleton variant='rectangular' animation='wave' height={200} />
        <Skeleton variant='rectangular' animation='wave' height={200} />
        <Skeleton variant='rectangular' animation='wave' height={200} />
      </div>
    </div>
  )
}
