import { useMemo, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'

import { DecodeTokenType } from './types'

export const useDecode = () => {
  const [decodeToken, setDecodeToken] = useState<DecodeTokenType>()

  useMemo(() => {
    const { token } = parseCookies()

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
  return { ...decodeToken }
}
