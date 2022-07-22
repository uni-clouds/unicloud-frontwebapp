import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAccessLevelZero } from '../../hooks/useAccessLevelZero'
import { ContractsAssets } from '../../templates/ContractsAssets'

const CreatingAssets: FC = () => {
  document.title = 'Uni.cloud | Contratos'
  const accessLevelZero = useAccessLevelZero('root')

  if (accessLevelZero) {
    return <ContractsAssets />
  }

  return <Navigate to='/not-found' replace />
}

export default CreatingAssets
