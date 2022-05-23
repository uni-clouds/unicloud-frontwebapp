import { useAuth } from '../../hooks/useAuth'

const HomePage: React.FC = () => {
  const { logout } = useAuth()

  return (
    <>
      <h1>home page uhull</h1>
      <button
        onClick={() => logout()}
        type='button'
        className='p-6 bg-brand-600 text-neutral-50'
      >
        Sair
      </button>
    </>
  )
}

export default HomePage
