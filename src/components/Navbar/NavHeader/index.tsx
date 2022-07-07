import { useMemo, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'
import { Avatar } from '../../Avatar'
import { MenuDropdown } from './MenuDropdown'
import { Notifications } from './Notifications'
import { DecodeTypes } from './types'
import { useUserType } from '../../../hooks/useUserType'
import { useDecode } from '../../../hooks/useDecode'

export const NavHeader = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userType, setUserType] = useState(null)
  const { data } = useUserType()
  const { first_name, last_name, email: userEmail } = useDecode()

  useMemo(() => {
    const createName = []
    createName.push(first_name)
    createName.push(last_name)
    const handleName = createName.join(' ')
    const type = data?.type === 'root' ? 'Super Administrador' : data?.type
    setUsername(handleName)
    setEmail(userEmail)
    setUserType(type)
    setFirstName(first_name)
    setLastName(last_name)
  }, [data, first_name, last_name, userEmail])
  return (
    <nav className='max-w-fit' role='navigation' aria-controls='navigation'>
      <ul role='menu' className='flex flex-row gap-6 items-center'>
        <li className='px-2'>
          <Notifications />
        </li>
        <li className=' px-2'>
          <Avatar firstName={firstName} lastName={lastName} />
        </li>
        <li>
          <MenuDropdown
            email={email}
            username={username}
            type={userType}
            firstName={firstName}
            lastName={lastName}
          />
        </li>
      </ul>
    </nav>
  )
}
