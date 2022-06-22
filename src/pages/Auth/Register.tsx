import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { UsersTable } from '../../components/Tables/Users'
import { api } from '../../services/api'

const Register: React.FC = () => {
  document.title = 'Unicloud | Registro'
  const navigate = useNavigate()
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    const token = urlParams.get('token')
    validateInvite(token)
    console.log('query', token)
  }, [])

  async function validateInvite(token: string | null) {
    try {
      const request = await api.post('/check-token/', { token: token })
      if (request.status === 200 && request.data.is_valid === true) {
        setIsValid(true)
      }
    } catch (error) {
      console.error(error)
      //msg error
    }
  }

  //lazy enquanto faz a chamada -> depois o componente
  //ao final redirecionar para o login
  //mensagem de envio com sucesso
  //mensagem de erro

  return <>{!!isValid && <UsersTable />}</>
}

export default Register
