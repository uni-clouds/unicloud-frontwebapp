import Skeleton from '@mui/material/Skeleton'

export const DashboardTableSkeleton: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-6  '>
      <Skeleton variant='text' animation='wave' height={24} />
      <Skeleton variant='rectangular' animation='wave' height={32} />
      <Skeleton variant='rectangular' animation='wave' height={32} />
      <Skeleton variant='rectangular' animation='wave' height={32} />
      <Skeleton variant='rectangular' animation='wave' height={32} />
      <Skeleton variant='rectangular' animation='wave' height={32} />
      <Skeleton variant='rectangular' animation='wave' height={32} />
    </div>
  )
}
