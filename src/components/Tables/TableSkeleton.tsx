import Skeleton from '@mui/material/Skeleton'

export const TableSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton variant='text' animation='wave' width={300} />
      <Skeleton animation='wave' variant='text' height={40} width={500} />
      <Skeleton animation='wave' variant='text' height={40} width={500} />
      <Skeleton animation='wave' variant='text' height={40} width={500} />
      <Skeleton animation='wave' variant='text' height={40} width={500} />
      <Skeleton animation='wave' variant='text' height={40} width={500} />
      <Skeleton variant='text' animation='wave' width={250} />
      <Skeleton variant='text' animation='wave' width={200} />
    </>
  )
}
