import { SubmitErrorHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsSearch } from 'react-icons/bs'
import { SearchBarProps } from './types'

export const SearchBar: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm()
  const { t: translate } = useTranslation()

  const onSearch: SubmitErrorHandler<SearchBarProps> = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form
      onSubmit={handleSubmit(onSearch)}
      className='flex flex-row items-center w-full text-base-500 dark:text-base-100 text-sm '
    >
      <label className='mr-2 absolute p-4' aria-label='search' role='search'>
        <BsSearch />
      </label>
      <input
        type='text'
        className={`${
          errors?.search
            ? 'focus:outline-rose-400 border-rose-400 focus:ring-offset-1 focus:ring-red-custom focus:ring-offset-rose-400 rounded-md'
            : 'focus:outline-0 border-0 focus:ring-0'
        } form-input basis-full relative py-3 pl-10 pr-4 focus-within:placeholder-transparent dark:placeholder:text-base-100 dark:placeholder-slate-800 placeholder:text-base-500 placeholder-slate-50 bg-transparent`}
        placeholder={translate('search-placeholder')}
        {...register('search', { required: true })}
      />
    </form>
  )
}
