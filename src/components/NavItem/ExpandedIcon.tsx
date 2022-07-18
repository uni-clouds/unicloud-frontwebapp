import { FC } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { ExpandIconPros } from './types'

export const ExpandIcon: FC<ExpandIconPros> = ({ isExpanded, handleClick }) => {
  return isExpanded ? (
    <MdExpandLess onClick={handleClick} />
  ) : (
    <MdExpandMore onClick={handleClick} />
  )
}
