import { useMemo, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'
import { Avatar } from '../../Avatar'
import { MenuDropdown } from './MenuDropdown'
import { Notifications } from './Notifications'
import { DecodeTypes } from './types'

export const NavHeader = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [isSuperUser, setIsSuperUser] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useMemo(() => {
    const cookies = parseCookies()
    const token = cookies.token
    if (token) {
      const decode = jwtDecode<DecodeTypes>(token)
      const createName = []
      createName.push(decode.first_name)
      createName.push(decode.last_name)
      const handleName = createName.join(' ')

      setUsername(handleName)
      setEmail(decode.email)
      setIsSuperUser(decode.is_superuser)
      setFirstName(decode.first_name)
      setLastName(decode.last_name)
    }
  }, [])
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
            isSuperUser={isSuperUser}
            firstName={firstName}
            lastName={lastName}
          />
        </li>
      </ul>
    </nav>
  )
}
