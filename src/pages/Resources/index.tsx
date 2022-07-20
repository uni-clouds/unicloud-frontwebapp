import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useCanAccess } from '../../hooks/useCanAccess'
import { ResourcesTypesPage } from '../../templates/ResourcesTypes'
// subItems: [
//   {
//     name: 'Tipos',
//     icon: MdOutlineSettingsSuggest,
//     url: '/resources/types'
//   },
//   {
//     name: 'Gerenciamento',
//     icon: MdOutlineSettingsSuggest,
//     url: '/resources/settings'
//   }
// ]

const Resources: FC = () => {
  document.title = 'Uni.cloud | Recursos'
  const accessLevelZero = useCanAccess({
    role: ['root']
  })

  if (accessLevelZero) {
    return <ResourcesTypesPage />
  }

  return <Navigate to='/not-found' replace />
}

export default Resources
