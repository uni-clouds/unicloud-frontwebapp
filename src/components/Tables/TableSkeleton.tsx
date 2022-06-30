import Skeleton from '@mui/material/Skeleton'
import { SkeletonTableProps } from './Users/types'

export const TableSkeleton: React.FC<SkeletonTableProps> = ({ width }) => {
  return (
    <>
      <Skeleton variant='text' animation='wave' width={width} />
      <Skeleton animation='wave' variant='text' height={40} width={width} />
      <Skeleton animation='wave' variant='text' height={40} width={width} />
      <Skeleton animation='wave' variant='text' height={40} width={width} />
      <Skeleton animation='wave' variant='text' height={40} width={width} />
      <Skeleton animation='wave' variant='text' height={40} width={width} />
      <Skeleton variant='text' animation='wave' width={width} />
      <Skeleton variant='text' animation='wave' width={width} />
    </>
  )
}
