import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ToastError } from '../../components/Elements/ToastError'
import { api } from '../../services/api'
import { AuthRegister } from '../../Templates/AuthRegister'
import { LoadingValidation } from '../../Templates/AuthRegister/LoadingValidation'
import GatewayTimeout from '../Error/GatewayTimeout'

//todo lazy enquanto faz a chamada -> depois o componente
//todo ao final redirecionar para o login
//mensagem de envio com sucesso -> OK
//mensagem de erro -> OK
//? problema de carregar no início
//todo caso o não tenha token -> apresentar tela de erro
//todo caso token seja inválido apresentar mensagem

const Register: React.FC = () => {
  document.title = 'Unicloud | Registro'
  const navigate = useNavigate()
  const [isValid, setIsValid] = useState(true)
  const [isNotValid, setIsNotValid] = useState(false)
  const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   const query = window.location.search
  //   const urlParams = new URLSearchParams(query)
  //   const token = urlParams.get('token')
  //   validateInvite(token)
  //   console.log('query', token)
  // }, [])

  async function validateInvite(token: string | null) {
    try {
      const request = await api.post('/check-token/', { token: token })
      if (request.status === 200 && request.data.is_valid === true) {
        setIsValid(true)
      }
      if (request.status === 200 && request.data.is_valid === false) {
        setIsNotValid(true)
      }
    } catch (error) {
      console.error(error)
      setIsError(true)
    }
  }

  const handleOnClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setIsError(false)
  }

  return (
    <>
      {!!isError && (
        <ToastError
          message='Ocorreu um erro na requisição, verifique sua conexão.'
          isError={isError}
          handleClose={handleOnClose}
        />
      )}
      {isValid ? (
        <AuthRegister />
      ) : isNotValid ? (
        <GatewayTimeout />
      ) : (
        <LoadingValidation />
      )}
    </>
  )
}

export default Register
