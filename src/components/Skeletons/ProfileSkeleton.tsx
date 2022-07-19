import Skeleton from '@mui/material/Skeleton'
import { AvatarSkeleton } from './AvatarSkeleton'
import { HeaderSkeleton } from './HeaderSkeleton'

export const ProfileSkeleton: React.FC = () => {
  return (
    <div className='w-800 flex gap-6 border rounded '>
      <div className='w-72 border-r'>
        <div className='w-full p-8 border-b'>
          <AvatarSkeleton />
        </div>
        <div className='flex flex-col p-8 border-b'>
          <Skeleton variant='text' animation='wave' height={32} width={100} />
          <Skeleton variant='text' animation='wave' height={64} width={200} />
        </div>
        <div className='flex flex-col p-8 gap-4'>
          <div className='flex gap-2 items-center'>
            <Skeleton
              variant='circular'
              animation='wave'
              height={20}
              width={20}
            />
            <Skeleton variant='text' animation='wave' height={32} width={200} />
          </div>
          <div className='flex gap-2 items-center'>
            <Skeleton
              variant='circular'
              animation='wave'
              height={20}
              width={20}
            />
            <Skeleton variant='text' animation='wave' height={32} width={200} />
          </div>
          <div className='flex gap-2 items-center'>
            <Skeleton
              variant='circular'
              animation='wave'
              height={20}
              width={20}
            />
            <Skeleton variant='text' animation='wave' height={32} width={200} />
          </div>
          <div className='flex gap-2 items-center'>
            <Skeleton
              variant='circular'
              animation='wave'
              height={20}
              width={20}
            />
            <Skeleton variant='text' animation='wave' height={32} width={200} />
          </div>
        </div>
      </div>
      <div className='flex flex-col p-6 flex-1 gap-6'>
        <div>
          <Skeleton variant='text' animation='wave' height={48} width={200} />
          <Skeleton variant='text' animation='wave' height={24} width={300} />
        </div>
        <Skeleton variant='text' animation='wave' height={32} />
        <div className='flex flex-col gap-8 py-4 px-2'>
          <Skeleton variant='text' animation='wave' height={24} />
          <Skeleton variant='text' animation='wave' height={24} />
          <Skeleton variant='text' animation='wave' height={24} />
          <Skeleton variant='text' animation='wave' height={24} />
        </div>
        <Skeleton variant='text' animation='wave' height={32} />
        <div className='flex flex-col gap-8 py-4 px-2'>
          <Skeleton variant='text' animation='wave' height={24} width={200} />
          <Skeleton variant='text' animation='wave' height={24} width={200} />
        </div>
      </div>
    </div>
  )
}
