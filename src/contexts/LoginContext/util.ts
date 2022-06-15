import { api } from '../../services/api'
import { UserType } from './types'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

const MAX_AGE_TOKEN = 60 * 60 //60 minutes = 3600 seconds
const MAX_AGE_REFRESH_TOKEN = 60 * 60 * 24 * 7 //7 days in seconds
const SESSION_VALIDATE = 60 * 1000 * 59 //59 minutes = 3540000 ms

export async function LoginRequest(username: string, password: string) {
  try {
    const request = await api.post('/login/', { username, password })

    const data = request.data
    if (data.refresh !== undefined && data.refresh !== null) {
      setCookie(null, 'refresh', data.refresh, {
        path: '/',
        maxAge: MAX_AGE_REFRESH_TOKEN,
        sameSite: true,
      })
    }
    return data
  } catch (err) {
    console.error(err)
    return null
  }
}

export function setUserLocalStorage(user: UserType | null) {
  if (user?.token !== undefined && user?.token !== null) {
    setCookie(null, 'user', String(user.email), {
      path: '/',
      maxAge: MAX_AGE_REFRESH_TOKEN,
      sameSite: true,
    })
    setCookie(null, 'token', String(user.token), {
      path: '/',
      maxAge: MAX_AGE_TOKEN,
      sameSite: true,
    })
  }
}

export function removeUserLocalStorage() {
  destroyCookie(null, 'user')
  destroyCookie(null, 'refresh')
  destroyCookie(null, 'token')
}

export function getTokenLocalStorage() {
  const token = parseCookies()
  if (!token.hasOwnProperty('user')) {
    return null
  }
  return token ?? null
}

export function refreshToken(refreshToken: string) {
  const refreshAuth = setInterval(async () => {
    try {
      const request = await api.post('/api/token/refresh/', {
        refresh: refreshToken,
      })

      const data = request.data
      console.log('refresh token', data)
      if (request.status === 200 && request.data !== undefined) {
        setCookie(null, 'token', String(data.access), {
          path: '/',
          maxAge: MAX_AGE_TOKEN,
          sameSite: true,
        })
      }
      const cookies = parseCookies()
      console.log('novo token', cookies.token)
      return data
    } catch (err) {
      console.error(err)
      return null
    } finally {
      clearInterval(refreshAuth)
    }
  }, SESSION_VALIDATE)
}
