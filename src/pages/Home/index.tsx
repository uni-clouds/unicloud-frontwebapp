import { Layout } from '../../components/Layout'
import { useAuth } from '../../hooks/useAuth'

const HomePage: React.FC = () => {
  const { logout } = useAuth()

  return (
    <Layout>
      <div className='grid place-items-center py-6'>
        <button
          onClick={() => logout()}
          type='button'
          className='p-6 bg-brand-600 text-neutral-50'
        >
          Sair
        </button>
      </div>
    </Layout>
  )
}

export default HomePage
