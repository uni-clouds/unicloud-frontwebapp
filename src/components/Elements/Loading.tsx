import { ImSpinner2 } from 'react-icons/im'

export const Loading: React.FC = () => {
  return (
    <div className='w-6 h-6 flex items-center justify-center overflow-hidden'>
      <ImSpinner2 className='w-4 h-4 animate-spin' />
    </div>
  )
}
