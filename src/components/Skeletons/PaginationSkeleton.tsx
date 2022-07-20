import Skeleton from '@mui/material/Skeleton'

export const PaginationSkeleton: React.FC = () => {
  return (
    <div className='w-800 flex justify-end gap-2 p-2'>
      <Skeleton variant='text' animation='wave' height={32} width={80} />
      <Skeleton variant='text' animation='wave' height={32} width={40} />
      <Skeleton variant='text' animation='wave' height={32} width={40} />
    </div>
  )
}
