import { InformationDisplayProps } from '../types'
import { FaAngleRight } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'

export default function InformationDisplay(props: InformationDisplayProps) {
  function renderIcon() {
    if (props.text.includes('@')) return <FiLock />
    else return <FaAngleRight />
  }

  return (
    <div className='flex items-center justify-between py-6'>
      <p>{props.text}</p>
      {props.icon && (
        <div className='rounded-full hover:bg-light-100 p-3 transition-colors'>
          {renderIcon()}
        </div>
      )}
    </div>
  )
}
