import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAccessLevelZero } from '../../hooks/useAccessLevelZero'
import { ContractsCreation } from '../../templates/ContractsCreation'

const CreatingContracts: FC = () => {
  document.title = 'Uni.cloud | Contratos'
  const accessLevelZero = useAccessLevelZero('root')

  if (accessLevelZero) {
    return <ContractsCreation />
  }

  return <Navigate to='/not-found' replace />
}

export default CreatingContracts
