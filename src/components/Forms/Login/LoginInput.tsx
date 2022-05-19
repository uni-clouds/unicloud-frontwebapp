import { useForm } from 'react-hook-form'
import { LoginInputProps } from './types'

export const LoginInput: React.FC<LoginInputProps> = ({
  placeholder,
  label,
  type
}) => {
  const {
    formState: { errors }
  } = useForm()

  return (
    <div className='flex flex-col gap-4 mb-5'>
      <label aria-label={`input ${label}`} className='font-bold'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        role={label}
        className='py-3 px-4 placeholder:text-base-300 rounded-md border border-light-200 placeholder-neutral-50 bg-transparent focus:border-brand-600 focus:ring-brand-600 focus:ring-1 focus:outline-none focus:ring-offset-1 focus:ring-offset-brand-800'
      />
      {errors.message}
    </div>
  )
}
