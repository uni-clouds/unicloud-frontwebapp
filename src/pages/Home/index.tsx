import { Layout } from '../../components/Layout'
import { useUserData } from '../../hooks/useUserData'
import { api } from '../../services/api'

const HomePage: React.FC = () => {
  const user = useUserData()

  async function getData() {
    const request = await api.get('/menu/')

    const handleData = request.data

    console.log('resposta menu =>', handleData)
  }

  return (
    <Layout>
      <section className='hero h-screen '>
        <div className='hero-content flex-col gap-6'>
          <p>{user.telefone}</p>
          <button
            className=' btn btn-primary btn-square px-12'
            type='button'
            onClick={getData}
          >
            click
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
