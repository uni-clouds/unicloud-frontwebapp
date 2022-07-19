import Skeleton from '@mui/material/Skeleton'

export const HeaderSkeleton: React.FC = () => {
  return (
    <div className=' w-full flex justify-between'>
      <div className='flex flex-col p-0'>
        <Skeleton variant='text' animation='wave' height={50} width={150} />
        <Skeleton variant='text' animation='wave' />
      </div>
      <Skeleton
        variant='rectangular'
        animation='wave'
        height={56}
        width={144}
      />
    </div>
  )
}
