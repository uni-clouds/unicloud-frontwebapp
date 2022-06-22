import { ImSpinner2 } from 'react-icons/im'

export const Loading: React.FC = () => {
  return (
    <div className='w-full h-6 grid place-content-center overflow-hidden'>
      <ImSpinner2 className='w-4 h-4 animate-spin' />
    </div>
  )
}
