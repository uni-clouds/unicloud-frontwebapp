import { SearchBar } from '../Forms/SearchBar'
import { NavHeader } from './NavHeader'

export const Header: React.FC = () => {
  return (
    <header className='w-full flex justify-between align-center py-2 px-4 shadow gap-6 bg-slate-50 absolute'>
      <SearchBar />
      <NavHeader />
    </header>
  )
}
