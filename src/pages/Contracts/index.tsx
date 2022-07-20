import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAccessLevelZero } from '../../hooks/useAccessLevelZero'
import { ContractsPage } from '../../templates/Contracts'

const Contracts: FC = () => {
  document.title = 'Uni.cloud | Recursos'
  const accessLevelZero = useAccessLevelZero('root')

  if (accessLevelZero) {
    return <ContractsPage />
  }

  return <Navigate to='/not-found' replace />
}

export default Contracts
