import { BsSearch } from 'react-icons/bs'

export const SearchBar: React.FC = () => {
  return (
    <form
      onSubmit={() => {}}
      className='flex flex-row items-center w-full text-base-500 text-sm '
    >
      <label className='mr-2 absolute p-4' aria-label='search' role='search'>
        <BsSearch />
      </label>
      <input
        type='text'
        className='basis-full relative py-3 pl-10 pr-4 focus-within:placeholder-transparent placeholder:text-base-500 placeholder-neutral-50 bg-transparent focus:outline-0'
        placeholder='Buscar'
      />
    </form>
  )
}
