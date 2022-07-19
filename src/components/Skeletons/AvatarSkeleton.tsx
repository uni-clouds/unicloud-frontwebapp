import Skeleton from '@mui/material/Skeleton'

export const AvatarSkeleton: React.FC = () => {
  return (
    <div className='w-full flex items-center gap-2'>
      <Skeleton variant='circular' animation='wave' height={40} width={50} />
      <div className='flex flex-col gap-2 w-full'>
        <Skeleton variant='text' animation='wave' height={28} />
        <Skeleton variant='text' animation='wave' height={20} />
      </div>
    </div>
  )
}
