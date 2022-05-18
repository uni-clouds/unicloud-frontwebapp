import { BsSearch } from 'react-icons/bs'

export const SearchBar: React.FC = () => {
  return (
    <form onSubmit={() => {}} className='flex max-w-max text-light-500 text-sm'>
      <label>
        <BsSearch />
      </label>
      <input
        type='text'
        className='py-2 px-4 w-100 outline-0'
        placeholder='Buscar'
      />
    </form>
  )
}
