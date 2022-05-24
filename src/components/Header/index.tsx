import { SearchBar } from '../Forms/SearchBar'
import { NavHeader } from '../Nav/NavHeader'

export const Header: React.FC = () => {
  return (
    <header className='w-full flex justify-between align-center py-2 px-4 shadow-md gap-2'>
      <SearchBar />
      <NavHeader />
    </header>
  )
}
