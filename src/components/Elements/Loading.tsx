import { ImSpinner2 } from 'react-icons/im'

export const Loading: React.FC = () => {
  return (
    <div className='w-full h-full grid place-content-center px-12 '>
      <ImSpinner2 className='w-4 h-4 animate-spin' />
    </div>
  )
}
