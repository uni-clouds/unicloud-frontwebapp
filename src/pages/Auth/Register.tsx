import { lazy, useEffect, useState } from 'react'
import { ToastError } from '../../components/Elements/ToastError'
import { ToastWarning } from '../../components/Elements/ToastWarning'
import { api } from '../../services/api'
import { AuthRegister } from '../../Templates/AuthRegister'
import { LoadingValidation } from '../../Templates/AuthRegister/LoadingValidation'

const NotValid = lazy(() => import('../Error/GatewayTimeout'))

const Register: React.FC = () => {
  document.title = 'Unicloud | Registro'

  const [isValid, setIsValid] = useState(true)
  const [isNotValid, setIsNotValid] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    const token = urlParams.get('token')
    if (!!token) {
      validateInvite(token)
    }
  }, [])

  async function validateInvite(token: string | null) {
    try {
      const request = await api.post('/check-token/', { token: token })
      if (request.status === 200 && request.data.is_valid === true) {
        setIsValid(true)
      }
      if (request.status === 200 && request.data.is_valid === false) {
        setIsNotValid(true)
      }
    } catch (error: any) {
      console.error(error)
      if (error?.response.status === 404) {
        setIsNotValid(true)
      }
      if (error?.response.status !== 404 && error?.response.status !== 410) {
        setIsError(true)
      }
      if (error?.response.status === 410) {
        setIsExpired(true)
      }
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
      {!!isExpired && (
        <ToastWarning
          message='Convite expirado, solicite um novo!'
          isWarning={isExpired}
          handleClose={handleOnClose}
        />
      )}
      {isValid ? (
        <AuthRegister />
      ) : isNotValid ? (
        <NotValid />
      ) : (
        <LoadingValidation />
      )}
    </>
  )
}

export default Register
