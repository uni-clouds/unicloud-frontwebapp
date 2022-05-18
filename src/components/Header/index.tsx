import { SearchBar } from '../Forms/SearchBar'

export const Header: React.FC = () => {
  return (
    <header className='container max-w-max flex justify-between align-center p-2'>
      <SearchBar />
    </header>
  )
}
