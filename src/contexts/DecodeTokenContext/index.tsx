import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'
import { createContext, useMemo, useState } from 'react'
import { DecodeTokenType } from './types'

export const DecodeTokenContext = createContext<DecodeTokenType>(
  {} as DecodeTokenType
)

export const DecodeTokenContextProvider = ({
  children
}: {
  children: JSX.Element
}) => {
  const [decodeToken, setDecodeToken] = useState<DecodeTokenType>()

  useMemo(() => {
    const cookies = parseCookies()
    const token = cookies.token
    if (token) {
      const decode = jwtDecode<DecodeTokenType>(token)

      setDecodeToken({
        email: decode.email,
        first_name: decode.first_name,
        last_name: decode.last_name,
        username: decode.username,
        user_id: decode.user_id,
        is_staff: decode.is_staff,
        is_superuser: decode.is_superuser
      })
    }
  }, [])

  return (
    <DecodeTokenContext.Provider value={{ ...decodeToken }}>
      {children}
    </DecodeTokenContext.Provider>
  )
}
