import { ImSpinner2 } from 'react-icons/im'

export const LoadingRedirect: React.FC = () => {
  return (
    <div className='w-full p-4'>
      <h2 className='mb-4 font-medium text-2xl'>
        Aguarde, a página será redirecionada em instantes...
      </h2>
      <div className='grid place-content-center w-full p-6'>
        <ImSpinner2 className='w-14 h-14 animate-spin' />
      </div>
    </div>
  )
}
